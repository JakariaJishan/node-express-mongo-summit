const fs = require('fs');
const myStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');

myStream.on('data', (data) => {
    console.log(data);
})
console.log('hello')