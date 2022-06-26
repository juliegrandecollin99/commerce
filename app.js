const express = require("express");
const hbs = require("hbs");
const mysql = require("mysql");
const dotenv = require("dotenv");


const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node.js-travels"
});

db.connect((error)=> {
 if(error){
    console.log(error)
 }else{
    console.log("MYSQL connected.......")
 }
});

app.use(express.static('public'));
app.set('view engine','hbs');


app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/package",(req,res)=>{
    res.render('package');
});


app.get("/book",(req,res)=>{
    res.render('book');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.listen(5000,()=>{
    console.log("Server started on port 5000")
})