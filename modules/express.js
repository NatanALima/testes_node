const express = require('express');
const UserModel = require('../src/models/user.model')

const app = express();

// Indica que para todas as requisições será utilizada o JSON
app.use(express.json());

app.get('/home', (req, res) => {
    res.status(200).send('<h1>Página Inicial</h1>')
});

app.get('/users', (req, res) => {
    const users = [
        {name: "John Doe",
         email: "john@doe.com"},
        {name: "Jane Doe",
         email: "jane@doe.com"}
    ]
    res.status(200).json(users);
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