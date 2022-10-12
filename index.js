// http(hypertext Transfer protocol)-event driven module

// const { Socket } = require('dgram');
// const http = require('http');

// const server = http.createServer();

// server.listen(3000);

// server.on('connection',(Socket)=>{
//     console.log("Hello New Commer")
// })


// Express
const express= require('express');
 
const app= express();

app.get('/',(req,res)=>{
    res.send(JSON.stringify([1,2,3]))
})

app.listen('3000',(req, res)=>{
    console.log(req);
} )