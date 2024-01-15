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

// Consulta dados pelo ID
app.get('/users/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch(err) {
        res.status(500).send(err.message);
    }
})

//Insere dados ao Banco de dados
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        // O registro foi criado com sucesso
        res.status(201).json(user);

    }catch(err) {
        res.status(500).send(err.message);

    }
    
})

//Edita dados no Banco de dados
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        //O uso do New serve para indicar ao banco que o mesmo deverá retornar o valor já atualizado. Caso não houvesse esse parâmetro, o banco retornaria os dados de ANTES do UPDATE
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(user);

    } catch(err) {
        res.status(500).send(err.message);

    }
})

//Deleta dados no Banco de dados
app.delete('/users/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id, {new: true});
        res.status(200).json(user);

    } catch (err) {
        res.status(500).send(err.message);
    }
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));