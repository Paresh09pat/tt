//http(hypertext Transfer protocol)-event driven module


const http = require('http');

const port = 3000;
const data = {
    Name:'Paresh',
    LastName:'Patil',
    Age:24,
    city:'Jalgaon'
}
const jsonData = JSON.stringify(data);

 const server = http.createServer((req, res) => {
    res.write(`<h1 > Hello New User</h1>`);
    res.write(jsonData);
    res.end();
})

server.listen(port, () => {
    console.log(`Connected to port ${port}💡`);

})



// Express
// const express= require('express');
 
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('JSON.stringify([1,2,3])')
// })

// app.listen('3000',(req, res)=>{
//     console.log(req);
// } )