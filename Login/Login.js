const express = require("express");
const router = express.Router();

const cors = require("cors");
const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");
const hashRound = 10;

const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "Admin",
  password: "python8745",
  database: "Football",
});

conn.connect();

router.use(express.json());
router.use(cors());

router.post("/loginPost", async (req, res) => {
  console.log(req.body.data);

  conn.query(
    "SELECT * FROM User WHERE id=?",
    [req.body.data.id],
    (err, rows, fields) => {
      if (err) console.log(err);
      if (rows.length < 1) {
        res.set("Access-Control-Allow-Origin", "*");
        res.status(200).json({
          msg: "NO ACCOUNT EXIST",
          succeed: false,
        });
      } else {
        console.log(req.body.data.password, rows[0].password);
        bcrypt.compare(
          req.body.data.password,
          rows[0].password,
          (err, result) => {
            if (result == true) {
              res.set("Access-Control-Allow-Origin", "*");
              res.status(200).json({
                msg: "Your Request is Successful",
                succeed: true,
              });
            } else if (result == false) {
              res.set("Access-Control-Allow-Origin", "*");
              res.status(200).json({
                msg: "Password is incorrect",
                succeed: false,
              });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
