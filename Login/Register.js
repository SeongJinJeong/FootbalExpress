const express = require("express");
const router = express.Router();

router.use(express.json())

router.post("/registerPost", (req, res) => {
  console.log(req.body);
  res.json({
    msg: "Your Register is Success",
  });
});

module.exports = router;
