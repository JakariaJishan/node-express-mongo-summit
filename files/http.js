let http = require('http');
const port = 3030;
let server = http.createServer((req, res) => {
    if(req.url === '/') {

        res.write('hello programmer');
        res.end();
    }else if(req.url === '/about'){
        res.write('this is about');
        res.end();
    }
    
    else{
        res.write('not found');
        res.end();
    }
});
server.listen(port);
console.log(`listen on ${port}`)