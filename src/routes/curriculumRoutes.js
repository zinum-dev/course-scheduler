const express = require('express');
const { getSubjects,scrapeCurriculum } = require('../controllers/curriculumController');

const router = express.Router();

// Rota para retornar os dados mockados
router.get('/mock', getSubjects);

// Rota que recebe uma URL e um Map de Materias com requisitos e dependentes
router.get('/', scrapeCurriculum);


/*    {
        code: "ICP123",
        name: "Linguagens Formais",
        credits: 4.0,
        theoreticalHours: 60,
        practicalHours: 0,
        extensionHours: 0,
        period: 5,
        prerequisites: ["ICP141", "ICP144"]
    },*/
// Rota para gerar o currículo a partir de array de matérias
//router.post('/array', generateCurriculum);


module.exports = router;

