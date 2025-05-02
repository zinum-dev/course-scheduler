import { Router } from 'express';
import { getSubjects, scrapeCurriculum } from '../controllers/curriculumController.js';

const router = Router();

// Rota para retornar os dados mockados
router.get('/mock', getSubjects);

// Rota que recebe uma URL e um Map de Materias com requisitos e dependentes
router.get('/', scrapeCurriculum);


export default router;

