const express = require("express");
const app = express();
const logger = require("morgan")
const cors = require("cors")
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

module.exports = app;
