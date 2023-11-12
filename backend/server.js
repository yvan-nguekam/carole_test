const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gest_biblio"
})

// function pour afficher les livres
app.get('/', (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

// function pour add un livre
app.post('/create', (req, res) => {
  const sql = "INSERT INTO books (`Name_book`, `Autor`, `Edition_house`) VALUES (?)";
  const values = [
    req.body.nameBook,
    req.body.edition,
    req.body.author
  ]
  db.query(sql, [values], (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

app.listen(8081, () => {
  console.log("listening");
})