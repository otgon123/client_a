const message = require('./message');
require('dotenv').config();

const name = process.env.NAME;
const number = process.env.NUMBER; 

const result = message.create(name, number);
console.log(result);

const fs = require('fs');

fs.writeFileSync('result.txt', result, 'utf-8');