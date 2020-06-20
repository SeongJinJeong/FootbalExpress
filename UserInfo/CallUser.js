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

router.post("/info", (req, res) => {
  console.log(req.body);
  conn.query(
    "Select * from User where No=?",
    [req.body.no],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          msg: "Can't Find User Data from DB",
          succeed: false,
        });
      }
      if (rows.length !== 1) {
        res.status(500).json({
          msg: "Can't Find User Data from DB",
          succeed: false,
        });
      } else {
        res.status(200).json({
          msg: "Post Request Succeed",
          succeed: true,
          data: {
            no: rows[0].No,
            name: rows[0].name,
            id: rows[0].id,
          },
        });
      }
    }
  );
});

module.exports = router;
