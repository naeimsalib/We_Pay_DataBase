var express = require("express");
var app = express.Router();

app.get("/employees", function (req, res) {
  con.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

module.exports = app;
