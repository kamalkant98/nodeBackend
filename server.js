import express from "express";
import 'dotenv/config';
const app = express();
const port = process.env.PORT ;
// require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login",(req,res)=>{
    // res.send("<h1>this is login page</h1>");
    res.json({"data":'asdasd'});
});

app.get("/register",(req,res)=>{
    res.send("this is register page");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})