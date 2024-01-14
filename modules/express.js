const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();

// Indica que para todas as requisições será utilizada o JSON
app.use(express.json());

// Seleciona todos os dados do banco de dados
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);

    } catch(err) {
        res.status(500).send(err.message);
    }
})

// Consulta usuário pelo ID
app.get('/users/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch(err) {
        res.status(500).send(err.message);
    }
})

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        // O registro foi criado com sucesso
        res.status(201).json(user);

    }catch(err) {
        res.status(500).send(err.message);

    }
    
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));