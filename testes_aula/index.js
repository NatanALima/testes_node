

const dotenv = require('dotenv');
dotenv.config();

const conn = require('./src/database/connect');
conn();

require('./modules/express');


