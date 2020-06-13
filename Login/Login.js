const express = require("express");
const router = express.Router();

const cors = require("cors");
const bodyParser = require("body-parser");

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

router.post("/loginPost", (req, res) => {
  console.log(req.body.data);

  conn.query(
    "SELECT * FROM User WHERE id=? AND password=?",
    [req.body.data.id, req.body.data.passwd],
    (err, rows, fields) => {
      if (err) console.log(err);
      if (rows.length < 1) {
        res.set("Access-Control-Allow-Origin", "*");
        res.status(200).json({
          msg: "NO ACCOUNT EXIST",
          succeed: false,
        });
      } else {
        res.set("Access-Control-Allow-Origin", "*");
        res.status(200).json({
          msg: "Your Request is Successful",
          succeed: true,
        });
      }
      console.log(rows);
    }
  );
});

module.exports = router;
