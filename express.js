const express= require('express');
 
const app = express();

app.get('/',(req,res)=>{
    res.send('hello World !!')
})

app.get('/loggedin',(req,res)=>{
    res.send("I am sending Responce")
})

app.listen('9000',(req, res)=>{
    console.log("Hello Bhai");
} )