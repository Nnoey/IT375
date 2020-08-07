const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);
//write File
const textOut = `Avocado information: ${textIn}\n Create on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('Flie written');
