// let _ = require('lodash');
// console.log(_.last([2,3,4]));

let fs = require('fs');

// fs.writeFileSync('demo.txt','hello world');
// fs.appendFileSync('demo.txt',' this is jack');

fs.readFile('demo.txt', (err, data) => {
    console.log(data.toString());
})