const express = require("express");
const router = express.Router();

const mysql = require("mysql");

const bcrypt = require("bcrypt");
const saltRound = 10;

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

  bcrypt.hash(req.body.data.password, saltRound, function (err, hash) {
    console.log(hash);
    conn.query(
      "select * from user where id=? or name=?",
      [req.body.data.id, req.body.data.name],
      (err, rows, fields) => {
        if (err) {
          console.log(err);
          res.status(200).json({
            msg: "Something went wrong",
            succeed: false,
          });
        } else {
          if (rows.length > 0) {
            res.status(200).json({
              msg: "ID or NICKNAME is already exists",
              succeed: false,
            });
          } else {
            conn.query(
              "insert into User(id,password,name) value(?,?,?);",
              [req.body.data.id, hash, req.body.data.name],
              (err, rows, fields) => {
                console.log(rows);
                if (err) {
                  console.log(err);
                  res.status(200).json({
                    msg: "Something went wrong",
                    succeed: false,
                  });
                } else {
                  res.status(200).json({
                    msg: "Your Register is Success",
                    succeed: true,
                  });
                }
              }
            );
          }
        }
      }
    );
  });
});

module.exports = router;
