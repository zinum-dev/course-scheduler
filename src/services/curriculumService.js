import axios from 'axios';
import { load } from 'cheerio';
import Subject from '../models/subject.js';
import iconv from 'iconv-lite';

async function scrapeUfrjCurriculum(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const html = iconv.decode(response.data, 'latin1');
        const $ = load(html);

        const frameSrc = $('#fset2 frame#main').attr('src');
        const frameUrl = new URL(frameSrc, url).href;

        const frameResponse = await axios.get(frameUrl, { responseType: 'arraybuffer' });
        const frameHtml = iconv.decode(frameResponse.data, 'latin1');
        const frame$ = load(frameHtml);

        const fSrc = frame$('frameset frame#frameDynamic').attr('src');
        const fUrl = new URL(fSrc, frameUrl).href;

        const fResponse = await axios.get(fUrl, { responseType: 'arraybuffer' });
        const fHtml = iconv.decode(fResponse.data, 'latin1');
        const f$ = load(fHtml);
        // Find the iframe element


        // Extract the curriculum data from the iframe content
        // Assuming the curriculum data is in a table or similar structure

        var courseInfo = null;
        const subjects = [];
        // Replace the following selector logic with the actual structure of the curriculum page
        f$('.lineBorder').each((index, element) => {
            if (index === 0) {
                // Extrair informações do curso na primeira iteração
                const elementHtml = f$(element).html();
                courseInfo = extractCourseInfo(elementHtml); // Chama a função com o HTML do elemento
                console.log('Course Info:', courseInfo);
            } else {

                // Extrair informações de cada matéria
                const period = f$(element).find('tr.tableTitle td b').text().trim();
                if (period && period.includes('Para fazer jus ao grau e diploma')) return; // Para o loop se encontrar essa string


                f$(element)
                    .find('tr.tableBodyBlue2, tr.tableBodyBlue1') // Seleciona as linhas das matérias
                    .each((_, subjectElement) => {
                        const code = f$(subjectElement).find('td:nth-child(1) a').text().trim();
                        const name = f$(subjectElement).find('td:nth-child(2)').text().trim();
                        const credits = parseFloat(f$(subjectElement).find('td:nth-child(3)').text().trim());
                        const theoreticalHours = parseInt(f$(subjectElement).find('td:nth-child(4)').text().trim(), 10);
                        const practicalHours = parseInt(f$(subjectElement).find('td:nth-child(5)').text().trim(), 10);
                        const extensionHours = parseInt(f$(subjectElement).find('td:nth-child(6)').text().trim(), 10);
                        // Ajuste para os requisitos
                        const prerequisitesHtml = f$(subjectElement).find('td:nth-child(7)').html();
                        let prerequisites = [];
                        if (prerequisitesHtml && prerequisitesHtml.trim() !== '') {
                            const firstLine = prerequisitesHtml.split('<br>')[0].trim(); // Pega apenas a primeira linha antes do <br>
                            if (firstLine) {
                                prerequisites = firstLine
                                    .split(',') // Divide os pré-requisitos por vírgula
                                    .map(prereq => prereq.trim().split(' ')[0].trim()); // Pega apenas o código antes do espaço
                            }
                        }

                        if (period && code) {
                            // Cria um objeto para a matéria
                            const subject = new Subject(
                                code,
                                name,
                                credits,
                                theoreticalHours,
                                practicalHours,
                                extensionHours,
                                period, // Período pode ser adicionado se necessário
                                prerequisites
                            );

                            // Adiciona a matéria ao array de subjects
                            subjects.push(subject);
                        }
                    });
            }
        });

        return {
            courseInfo,
            subjects
        };
    } catch (error) {
        console.error('Error scraping curriculum:', error);
        throw error;
    }
}


function extractCourseInfo(html) {
    const $ = load(html);

    // Obter o nome do curso
    const courseName = $('b[style="font-size: 15pt"]').text().trim();

    // Obter o código do curso
    const courseCode = $('td:contains("Código:")').next().text().trim();

    // Obter a duração recomendada
    const recommendedDuration = $('td:contains("Duração recomendada na UFRJ:")').next().text().trim();

    // Obter o responsável
    const coordinator = $('td:contains("Responsável:")').next().text().trim();

    // Obter o email do responsável
    const coordinatorEmail = $('td:contains("Email:")').find('a').text().trim();

    // Obter o telefone comercial
    const commercialPhone = $('td:contains("Comercial:")').next().text().trim();

    return {
        courseName,
        courseCode,
        recommendedDuration,
        coordinator,
        coordinatorEmail,
        commercialPhone,
    };
}


export default scrapeUfrjCurriculum;