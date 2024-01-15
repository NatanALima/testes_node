const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cursonodejs.woawndu.mongodb.net/database?retryWrites=true&w=majority`);
        console.log('Conexão realizada com Sucesso!');

    } catch (err) {
        console.log(process.env.MONGODB_USER);
    }
    
}

module.exports = connectToDatabase;