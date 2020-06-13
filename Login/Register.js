const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.use(express.json());

const conn = mysql.createConnection({
  host: "localhost",
  user: "Admin",
  password: "python8745",
  database: "Football",
});

conn.connect();

router.post("/registerPost", (req, res) => {
  console.log(req.body);

  conn.query(
    "insert into User(id,password,name) value(?,?,?);",
    [req.body.data.id, req.body.data.password, req.body.data.name],
    (err, rows, fields) => {
      if (err) console.log(err);
    }
  );

  res.json({
    msg: "Your Register is Success",
  });
});

module.exports = router;
