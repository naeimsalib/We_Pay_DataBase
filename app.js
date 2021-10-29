const express = require("express");
const app = express();
var cors = require("cors");
const sql = require("mysql");
const bodyParser = require("body-parser");

//allows for middleware to work
app.use(cors());

//allows for post method to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database (pls modify user and password if needed to connect locally)
const con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "wepay",
});

//connect to the database
con.connect((err) => {
  if (err) throw err;
  console.log("DB Connected.");
});

//get every employee
app.get("/employees", function (req, res) {
  con.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//add employee
app.post("/addemployee", function (req, res) {
  console.log(req.body);
  let stmt =
    "INSERT INTO employee (Name, Salary, Status, Position, Address, WorkState, LivingState, SSN) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  let data = [
    req.body.name,
    req.body.salary,
    req.body.status,
    req.body.position,
    req.body.address,
    req.body.workState,
    req.body.livingState,
    req.body.SSN,
  ];
  con.query(stmt, data, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
  });
});

//delete employee
app.delete("/removeemployee", function(req, res){
  console.log(req.body);
  let stmt = "DELETE FROM employee WHERE eID = ?";
  let data = req.body.id;
  con.query(stmt, data, (err, results, fields) => {
    if (err) { 
      return console.error(err.message);
    }
  })

})

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
