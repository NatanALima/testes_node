/*
=========================
Aprendendo sobre importação e exportação
=========================
*/
// const { Person } = require('./Person');
// const person = new Person('Nome');
// console.log(person.sayMyName());


// require('./modules/path');
// require('./modules/fs');
// require('./modules/http')
// require('./modules/express');

const dotenv = require('dotenv');
dotenv.config();

const conn = require('./src/database/connect');

conn();
