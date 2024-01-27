const mongoose = require('mongoose');
const urlDb = "mongodb://localhost:27017";


const connectToDatabase = async () => {
    try {
        await mongoose.connect(urlDb);
        console.log('Conectado!');

    } catch(err) {
        console.log(`Não foi possível conectar ao banco: ${err}`);

    }
}

module.exports = connectToDatabase;