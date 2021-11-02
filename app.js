const express = require("express");
const app = express();
var cors = require("cors");
const sql = require("mysql");

//allows for middleware to work
app.use(cors());
app.use(express.json());

//connect to database (pls modify user and password if needed to connect locally)
const con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "wepay",
});

//connect to the database
con.connect((err) => {
  if (err) throw err;
  console.log("DB Connected.");

});

app.get("/benefits", function (req, res) {
  con.query("SELECT * FROM employee_benefits", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/employees", function (req, res) {
  con.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

const startListening = () => {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!`);
  });
};

const bootApp = async () => {
  await startListening();
};

//Run the application
bootApp();
