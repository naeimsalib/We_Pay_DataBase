var express = require("express");
var app = express.Router();

// Subrouters;
const employeeRouter = require("./employees");
const benefitsRouter = require("./benefits");

// Mount our subrouters to assemble our apiRouter;
app.use("/employees", employeeRouter);
app.use("/benefits", benefitsRouter);

// Error handling middleware;
app.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

module.exports = app;
