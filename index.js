const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login",(req,res)=>{
    res.send("<h1>this is login page</h1>");
});

app.get("/register",(req,res)=>{
    res.send("this is register page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})