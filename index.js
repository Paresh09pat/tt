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
 const cores = require('cores')
const app = express();

// const middleware = (req,res, next) => {
// console.log('Got login req');
// }

app.get('/',(req,res)=>{
   
    res.send('JSON.stringify([1,2,3])')
})

app.get('/api',(req,res)=>{
    
    res.json({
        fName:'Paresh',
        lName:"Patil"
    })
})

app.listen('9000',(req, res)=>{
    console.log(req);
} )