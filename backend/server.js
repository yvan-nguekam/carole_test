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
    req.body.author,
    req.body.edition
  ]
  db.query(sql, [values], (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

// function pour update un livre
app.put('/update/:id', (req, res) => {
  const sql = "update books set `Name_book` = ?, `Autor` = ?, `Edition_house` = ? where id = ?";
  const values = [
    req.body.nameBook,
    req.body.author,
    req.body.edition
  ]
  const id = req.params.id;

  db.query(sql, [...values, id], (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

// function pour delete un livre
app.delete('/books/:id', (req, res) => {
  const sql = "DELETE FROM books WHERE id = ?";

  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
  })
})

app.listen(8081, () => {
  console.log("listening");
})