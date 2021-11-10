const express = require("express");
const app = express();
var cors = require("cors");
const sql = require("mysql");
const bodyParser = require("body-parser");

//allows for middleware to work
app.use(cors());
app.use(express.json());

//allows for post method to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database (pls modify user and password if needed to connect locally)
const con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "fartrip921",
  database: "wepay",
});

//connect to the database
con.connect((err) => {
  if (err) throw err;
  console.log("DB Connected.");
});

// ==========BENEFITS===========
//get benefits
app.get("/benefits", function (req, res) {
  con.query("SELECT * FROM employee_benefits", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//get individual benefits
app.post("/getemployeebenefit", function (req, res) {
  if (req.body.name != "" && req.body.SSN != "") {
    let stmt = "SELECT * FROM employee_benefits WHERE name = ?";
    let data = [req.body.name];
    con.query(stmt, data, (err, results, fields) => {
      res.send(results);
      if (err) {
        return console.error(err.message);
      }
    });
  }
});

//update benefits
app.put("/updateemployeebenefit", function (req, res) {
  console.log(req.body);
  let stmt =
    "UPDATE employee_benefits SET PTO = ?, Health_Insurance = ?, Food_Stipend = ?, Dental_Insurance = ? WHERE  NAME = ?;";
  let data = [
    req.body.PTO,
    req.body.Health_Insurance,
    req.body.Food_Stipend,
    req.body.Dental_Insurance,
    req.body.name
  ];
  con.query(stmt, data, (err, results, fields) => {
    res.send(results);
    if (err) {
      return console.error(err.message);
    }
  });
});

// ==========EMPLOYEES===========
//add employee & benefits
app.post("/addemployee", function (req, res) {
  console.log(req.body);
  let stmt =
    "INSERT INTO employee (Name, Salary, Status, Phone_Number, Position, Address, WorkState, LivingState, SSN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  let employeedata = [
    req.body.name,
    req.body.salary,
    req.body.status,
    req.body.phoneNum,
    req.body.position,
    req.body.address,
    req.body.workState,
    req.body.livingState,
    req.body.SSN,
  ];

  let stmt1 =
    "INSERT INTO employee_benefits (Name, PTO, Health_Insurance, Food_Stipend, Dental_Insurance) VALUES (?, ?, ?, ?, ?)";
  let benefitsdata = [
    req.body.name,
    req.body.PTO,
    req.body.Health_Insurance,
    req.body.Food_Stipend,
    req.body.Dental_Insurance
  ]

  //add employee
  con.query(stmt, employeedata, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
  });
  //add employee's benefits
  con.query(stmt1, benefitsdata, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
  });
});

//get every employee
app.get("/employees", function (req, res) {
  con.query("SELECT * FROM employee", function (err, results, fields) {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

//get total employees currently
app.get("/getemployeecount", function(req,res){
  con.query("SELECT COUNT(*) as TOTAL from employee", function(err, results, fields){
    if (err) throw err;
    console.log(results)
    res.send(results);
  })
})

//get total employees that needs to be reviewed
app.get("/totalneedsreviewed", function(req,res){
  con.query("SELECT COUNT(*) as TOTAL_STATUS from employee WHERE Status = 2", function(err, results, fields){
    if (err) throw err;
    console.log(results)
    res.send(results);
  })
})


//find employee
app.post("/findemployee", function (req, res) {
  if (req.body.name != "" && req.body.SSN != "") {
    let stmt = "SELECT * FROM Employee WHERE name = ? AND SSN LIKE ?";
    let data = [req.body.name, "%" + req.body.SSN];
    con.query(stmt, data, (err, results, fields) => {
      res.send(results);
      if (err) {
        return console.error(err.message);
      }
    });
  }
});

//update employee
app.put("/updateemployee", function (req, res) {
  let stmt =
    "UPDATE employee SET Name = ?, Salary = ?, Address = ?, Phone_Number = ?, Position = ?, WorkState = ?, LivingState = ? WHERE  NAME = ? AND SSN LIKE ?;";
  let data = [
    req.body.name,
    req.body.salary,
    req.body.address,
    req.body.phoneNum,
    req.body.position,
    req.body.workState,
    req.body.livingState,
    req.body.name,
    "%" + req.body.SSN,
  ];
  con.query(stmt, data, (err, results, fields) => {
    res.send(results);
    if (err) {
      return console.error(err.message);
    }
  });
});

//get past employees
app.get("/pastemployees", function (req, res) {
  con.query("SELECT * FROM past_employee", function (err, result, fields) {
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
