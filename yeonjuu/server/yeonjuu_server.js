const http = require('http');// node 내장 모듈 불러옴
const PORT = 5000;
const ip = 'localhost';


http.createServer((req,res)=>{

    if (req.method === 'OPTIONS') {
        res.writeHead(200, defaultCorsHeader);
        res.end();
      }
    
    if(req.method ===  'POST' && req.url === '/y'){
        let body = [];
        req.on('data',(chunk) =>{
            body.push(chunk);
        })
        let body = [];
        req.on('data',(chunk) =>{
            body.push(chunk);
        }).on('end',() =>{
            body = Buffer.concat(body).toString();
            res.writeHead(200,defaultCorsHeader);
            res.end(body);
        })
    }else if(req.method ===  'POST' && req.url === '/s'){
        let body = [];
        req.on('data',(chunk) =>{
            body.push(chunk);
        }).on('end',() =>{
            body = Buffer.concat(body).toString();
            res.writeHead(200,defaultCorsHeader);
            res.end(body);
        });
    }else if(req.method ===  'POST' && req.url === '/w'){
        let body = [];
        req.on('data',(chunk) =>{
            body.push(chunk);
        }).on('end',() =>{
            body = Buffer.concat(body).toString();
            res.writeHead(200,defaultCorsHeader);
            res.end(body);
        });
    }else if(req.method ===  'POST' && req.url === '/h'){
        let body = [];
        req.on('data',(chunk) =>{
            body.push(chunk);
        }).on('end',() =>{
            body = Buffer.concat(body).toString();
            res.writeHead(200,defaultCorsHeader);
            res.end(body);
        });
    }else {
        req.on('error', (err) => {
          res.writeHead(400, defaultCorsHeader);
          console.error(err);
        })
      }

}).listen(PORT,ip)

const defaultCorsHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': 10
  };
  