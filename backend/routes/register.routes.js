const express = require("express");
const router = express.Router();
const {
  createPerson,
  getPeople,
} = require("../controllers/register.controller");

router.post("/people", createPerson);
router.get("/people", getPeople);
module.exports = router;
