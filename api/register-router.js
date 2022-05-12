const Users = require("./database");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  Users.push(req.body);
  res.status(201).json(Users[Users.length - 1]);
});
module.exports = router;
