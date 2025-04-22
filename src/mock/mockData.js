const Subject = require('../models/subject'); // Importando a classe Subject

const mockSubjectsArray = [
    // Primeiro período
    {
        code: "ICP131",
        name: "Programação de Computadores I",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 1,
        prerequisites: []
    },
    {
        code: "ICP132",
        name: "Processos de Software",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 1,
        prerequisites: []
    },
    {
        code: "ICP133",
        name: "Fund de Sistemas de Computação",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 1,
        prerequisites: []
    },
    {
        code: "ICP134",
        name: "Números Inteiros Criptografia",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 1,
        prerequisites: []
    },
    {
        code: "ICP135",
        name: "Projeto de Carreira",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 1,
        prerequisites: []
    },
    {
        code: "ICP136",
        name: "Introd Pensamento Dedutivo",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 1,
        prerequisites: []
    },
    {
        code: "ICPX06",
        name: "Atividades Complementares Bcc",
        credits: 2.0,
        theoreticalHours: 0,
        practicalHours: 90,
        extensionHours: 0,
        period: 1,
        prerequisites: []
    },
    {
        code: "ICPZ55",
        name: "Ativ Curricular Extensão - Bcc",
        credits: 0.0,
        theoreticalHours: 0,
        practicalHours: 0,
        extensionHours: 320,
        period: 1,
        prerequisites: []
    },
    // Segundo período
    {
        code: "ICP141",
        name: "Programação de Computadores II",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 2,
        prerequisites: ["ICP131"]
    },
    {
        code: "ICP142",
        name: "Organização de Dados I",
        credits: 2.0,
        theoreticalHours: 15,
        practicalHours: 15,
        extensionHours: 0,
        period: 2,
        prerequisites: []
    },
    {
        code: "ICP143",
        name: "Projeto Prático",
        credits: 2.0,
        theoreticalHours: 15,
        practicalHours: 15,
        extensionHours: 0,
        period: 2,
        prerequisites: ["ICP131", "ICP132", "ICP133"]
    },
    {
        code: "ICP144",
        name: "Matemática Discreta",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 2,
        prerequisites: ["ICP134"]
    },
    {
        code: "ICP145",
        name: "Habilidades Sociais p Trabalho",
        credits: 2.0,
        theoreticalHours: 30,
        practicalHours: 0,
        extensionHours: 0,
        period: 2,
        prerequisites: ["ICP135"]
    },
    {
        code: "MAE111",
        name: "Cálculo Infinitesimal I",
        credits: 6.0,
        theoreticalHours: 75,
        practicalHours: 15,
        extensionHours: 0,
        period: 2,
        prerequisites: []
    },
    // Terceiro período
    {
        code: "ICP115",
        name: "Álgebra Linear Algorítmica",
        credits: 5.0,
        theoreticalHours: 60,
        practicalHours: 30,
        extensionHours: 0,
        period: 3,
        prerequisites: ["ICP136", "ICP144"]
    },
    {
        code: "ICP116",
        name: "Estrutura dos Dados",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 3,
        prerequisites: ["ICP141"]
    },
    {
        code: "ICP237",
        name: "Introd à Modelagem de Sistemas",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 3,
        prerequisites: ["ICP132", "ICP141"]
    },
    {
        code: "ICP238",
        name: "Introd à Computação Numérica",
        credits: 2.0,
        theoreticalHours: 15,
        practicalHours: 15,
        extensionHours: 0,
        period: 3,
        prerequisites: ["ICP131", "ICP133", "MAE111"]
    },
    {
        code: "ICP239",
        name: "Programação Orientada a Objeto",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 3,
        prerequisites: ["ICP141"]
    },
    {
        code: "MAE992",
        name: "Cálculo Integ e Diferencial II",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 3,
        prerequisites: ["MAE111"]
    },
    // Quarto período
    {
        code: "ICP246",
        name: "Arquitet Comput e Sist Operac",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 4,
        prerequisites: ["ICP133", "ICP141"]
    },
    {
        code: "ICP248",
        name: "Comput Científ e Análise Dados",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 4,
        prerequisites: ["ICP115", "ICP238", "MAE992"]
    },
    {
        code: "ICP249",
        name: "Tecnologia e Sociedade",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 4,
        prerequisites: ["ICP145"]
    },
    {
        code: "ICP489",
        name: "Banco de Dados I",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 4,
        prerequisites: ["ICP116"]
    },
    {
        code: "MAD243",
        name: "Estatística e Probabilidade",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 4,
        prerequisites: ["MAE121"]
    },
    // Quinto período
    {
        code: "ICP123",
        name: "Linguagens Formais",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 5,
        prerequisites: ["ICP141", "ICP144"]
    },
    {
        code: "ICP350",
        name: "Modelagem e Aval de Desempenho",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 5,
        prerequisites: ["ICP115", "MAD243"]
    },
    {
        code: "ICP351",
        name: "Model Matemát e Computacional",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 5,
        prerequisites: ["ICP115", "MAE992"]
    },
    {
        code: "ICP353",
        name: "Computadores e Programação",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 5,
        prerequisites: ["ICP246"]
    },
    {
        code: "ICP368",
        name: "Algoritmos e Grafos",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 5,
        prerequisites: ["ICP116", "ICP144"]
    },
    // Sexto período
    {
        code: "ICP361",
        name: "Programação Concorrente",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 6,
        prerequisites: ["ICP239", "ICP353"]
    },
    {
        code: "ICP362",
        name: "Redes de Computadores I",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 6,
        prerequisites: ["ICP131", "ICP133", "MAD243"]
    },
    {
        code: "ICP363",
        name: "Introd Aprendizado de Máquina",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 6,
        prerequisites: ["ICP248", "MAD243"]
    },
    {
        code: "ICP365",
        name: "Otimização",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        period: 6,
        prerequisites: ["ICP115", "ICP238"]
    },
    {
        code: "ICP370",
        name: "Lógica e Computabilidade",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 6,
        prerequisites: ["ICP123"]
    },
    // Sétimo período
    {
        code: "ICP472",
        name: "Metodologia da Pesquisa",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 7,
        prerequisites: ["ICP249"]
    },
    {
        code: "ICP473",
        name: "Segurança da Informação",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 7,
        prerequisites: ["ICP353", "ICP362"]
    },
    {
        code: "OPT001",
        name: "Atividades Acadêmicas Optativas",
        credits: 8.0,
        theoreticalHours: 120,
        practicalHours: 0,
        extensionHours: 0,
        period: 7,
        prerequisites: []
    },
    {
        code: "OPT002",
        name: "Atividades Acadêmicas Optativas (Humanidades)",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 7,
        prerequisites: []
    },
    // Oitavo período
    {
        code: "ICPK01",
        name: "Trabalho de Conclusão de Curso BCC",
        credits: 2.0,
        theoreticalHours: 90,
        practicalHours: 0,
        extensionHours: 0,
        period: 8,
        prerequisites: ["ICP472"]
    },
    {
        code: "OPT003",
        name: "Atividades Acadêmicas de Livre Escolha",
        credits: 8.0,
        theoreticalHours: 120,
        practicalHours: 0,
        extensionHours: 0,
        period: 8,
        prerequisites: []
    },
    {
        code: "OPT004",
        name: "Atividades Acadêmicas Optativas",
        credits: 8.0,
        theoreticalHours: 120,
        practicalHours: 0,
        extensionHours: 0,
        period: 8,
        prerequisites: []
    },
    // Nono período
    {
        code: "OPT005",
        name: "Atividades Acadêmicas Optativas",
        credits: 16.0,
        theoreticalHours: 240,
        practicalHours: 0,
        extensionHours: 0,
        period: 9,
        prerequisites: []
    },
    //Eletivas
    {
        code: "FIM230",
        name: "Física III - a",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["FIT112", "MAC128"]
    },
    {
        code: "FIM240",
        name: "Física IV - a",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["FIM230"]
    },
    {
        code: "FIT112",
        name: "Física I - a",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: []
    },
    {
        code: "FIT122",
        name: "Física II - a",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["FIT112", "MAC118"]
    },
    {
        code: "ICP005",
        name: "Ética em Computação",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: []
    },
    {
        code: "ICP006",
        name: "Internet das Coisas",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP246", "ICP362"]
    },
    {
        code: "ICP009",
        name: "Sist Colaborat e Comput Social",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP237"]
    },
    {
        code: "ICP010",
        name: "Web Semântica",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP489"]
    },
    {
        code: "ICP011",
        name: "Tóp Esp em Ciência de Dados I",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP363", "ICP489"]
    },
    {
        code: "ICP012",
        name: "Tóp Esp em Ciência de Dados II",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP363", "ICP489"]
    },
    {
        code: "ICP013",
        name: "Séries e Transformadas Comput",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP115", "MAE992"]
    },
    {
        code: "ICP014",
        name: "Comput Científ Equaç Dif Ordin",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP248", "ICP351"]
    },
    {
        code: "ICP015",
        name: "Comput Científ Equaç Dif Parc",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP014"]
    },
    {
        code: "ICP016",
        name: "Introd Métod Elementos Finitos",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP248"]
    },
    {
        code: "ICP017",
        name: "Otimização Linear",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP365"]
    },
    {
        code: "ICP018",
        name: "Otimização Não Linear",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP365"]
    },
    {
        code: "ICP019",
        name: "Álgebra Linear Aplicada",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP248"]
    },
    {
        code: "ICP020",
        name: "Engenharia de Software",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP237"]
    },
    {
        code: "ICP021",
        name: "Tóp Esp em Engenharia Dados I",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP489"]
    },
    {
        code: "ICP022",
        name: "Tóp Esp em Engenharia Dados II",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP489"]
    },
    {
        code: "ICP023",
        name: "Gestão de Projetos",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP237"]
    },
    {
        code: "ICP024",
        name: "Análise e Projeto de Sistemas",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,

        prerequisites: ["ICP237"]
    },
    {
        code: "ICP025",
        name: "Computação em Nuvem",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP246", "ICP362"]
    },
    {
        code: "ICP026",
        name: "Redes de Computadores II",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP362"]
    },
    {
        code: "ICP027",
        name: "Criptografia",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP115", "ICP131", "ICP134"]
    },
    {
        code: "ICP028",
        name: "Tóp Esp em Arquitetura Comput",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP246"]
    },
    {
        code: "ICP029",
        name: "Empreendedorismo e Inovação",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,

        prerequisites: ["ICP145"]
    },
    {
        code: "ICP030",
        name: "Governança e Gestão de Dados",
        credits: 4.0,
        theoreticalHours: 45,
        practicalHours: 15,
        extensionHours: 0,
        prerequisites: ["ICP489"]
    }

];

// Convertendo o array para um array de instâncias de Subject
const mockSubjectsArrayInstances = mockSubjectsArray.map(subjectData => {
    return new Subject(
        subjectData.code,
        subjectData.name,
        subjectData.credits,
        subjectData.theoreticalHours,
        subjectData.practicalHours,
        subjectData.extensionHours,
        subjectData.period,
        subjectData.prerequisites
    );
});

module.exports = mockSubjectsArrayInstances;

