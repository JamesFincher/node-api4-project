const express = require("express");
const router = express.Router();

const Users = require("./database");

router.get("/", (req, res, next) => {
  res.json(Users);
});

module.exports = router;
