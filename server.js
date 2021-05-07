const express = require("express");
const app = express()

app.set('view engine', 'ejs');
app.use(express.static("static"));

app.get('/', function (req, res){
  res.render("index");
});

app.get('/models', function (req, res){
  res.render("models");
});

app.get('/sac', function (req, res){
  res.render("sac");
});

app.get('/404', function (req, res){
  res.render("404");
});

app.listen(1511);
console.log("Rodando na porta http://localhost:1511")