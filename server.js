const express = require("express");
const app = express()

app.set('view engine', 'ejs');
app.use(express.static("public/static"));

app.get('/', function (req, res){
  res.render("index");
});

app.listen(1511);
console.log("Rodando na porta http://localhost:1511")