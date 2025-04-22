const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa o middleware CORS
const curriculumRoutes = require('./routes/curriculumRoutes'); // Importa as rotas de subjects

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors()); // Habilita CORS para todas as rotas

// Rotas
app.use('/api/curriculum', curriculumRoutes); // Define as rotas para subjects

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});