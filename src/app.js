import express from 'express';
import cors from 'cors'; // Importa o middleware CORS
import curriculumRoutes from './routes/curriculumRoutes.js'; // Importa as rotas de subjects
import pkg from 'body-parser';

const { json } = pkg;

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(json());
app.use(cors()); // Habilita CORS para todas as rotas

// Rotas
app.use('/api/curriculum', curriculumRoutes); // Define as rotas para subjects

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});