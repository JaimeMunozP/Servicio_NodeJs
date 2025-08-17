const user = {username: 'Jaime Munoz', age: 21, password: '1234' }
const http = require('http');
const port = 3000

const server = http.createServer((req, res) => { 
    if (req.url === '/user' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'}); 
        res.end(JSON.stringify(user));
    }
})

server.listen(port,()=>{
    console.log('servidor Corriendo en el puerto ' +  port)
})