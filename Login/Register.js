const express = require("express");
const router = express.Router();

router.post("/registerPost", (req, res) => {
  console.log(req);
  res.json({
    msg: "Your Register is Success",
  });
});

module.exports = router;
