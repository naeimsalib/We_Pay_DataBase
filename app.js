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
  password: "123",
  database: "wepay",
});

//connect to the database
con.connect((err) => {
  if (err) throw err;
  console.log("DB Connected.");
});

//=========EMPLOYEE ACCOUNT==========
//login
app.use("/login", (req, res) => {
  let stmt =
    "SELECT * FROM employee_account WHERE UserName = ? AND Password = ?;";
  let data = [req.body.username, req.body.password];
  console.log(data)
  con.query(stmt, data, (err, results, fields) => {
    console.log(results)
    let data = {
      data:results[0],
      token: '123token'
    }
    res.send(data);
    if (err) {
      return console.error(err.message);
    }
  });
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

//delete benefits
app.post("/deletebenefits", function (req, res) {
  let stmt = "DELETE FROM employee_benefits WHERE name = ?";
  let data = [req.body.name];
  con.query(stmt, data, (err, results, fields) => {
    res.send(results);
    if (err) {
      return console.error(err.message);
    }
  });
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
    req.body.name,
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
    "INSERT INTO employee (Name, Email, Salary, Status, StartDate, Position, EmployeeType, Hourly_Rate, Hours_Worked, Working_Hours, Address, WorkState, LivingState, Phone_Number, SSN) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  let employeedata = [
    req.body.name,
    req.body.email,
    req.body.salary,
    req.body.status,
    req.body.startDate,
    req.body.position,
    req.body.employeeType,
    req.body.hourlyRate,
    req.body.hoursWorked,
    req.body.workingHours,
    req.body.address,
    req.body.workState,
    req.body.livingState,
    req.body.phoneNum,
    req.body.SSN,
  ];

  let stmt1 =
    "INSERT INTO employee_benefits (Name, PTO, Health_Insurance, Food_Stipend, Dental_Insurance) VALUES (?, ?, ?, ?, ?)";
  let benefitsdata = [
    req.body.name,
    req.body.PTO,
    req.body.Health_Insurance,
    req.body.Food_Stipend,
    req.body.Dental_Insurance,
  ];

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
app.get("/getemployeecount", function (req, res) {
  con.query(
    "SELECT COUNT(*) as TOTAL from employee",
    function (err, results, fields) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

//get total employees that needs to be reviewed
app.get("/totalneedsreviewed", function (req, res) {
  con.query(
    "SELECT COUNT(*) as TOTAL_STATUS from employee WHERE Status = 2",
    function (err, results, fields) {
      if (err) throw err;
      console.log(results);
      res.send(results);
    }
  );
});

//find employee by name and ssn
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

//find employee by name
app.post("/findemployeebyname", function (req, res) {
  if (req.body.name != "") {
    let stmt = "SELECT * FROM Employee WHERE name LIKE ?;";
    let data = req.body.name + "%";
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
    "UPDATE employee SET Name = ?, Email = ?, Salary = ?, Hourly_Rate = ?, EmployeeType = ?, Status = ?, StartDate = ?, Manager = ?, Address = ?, Phone_Number = ?, Position = ?, WorkState = ?, LivingState = ? WHERE  NAME = ? AND SSN LIKE ?;";
  let data = [
    req.body.name,
    req.body.email,
    parseInt(req.body.salary),
    parseInt(req.body.hourlyRate),
    req.body.employeeType,
    req.body.status,
    req.body.StartDate,
    req.body.manager,
    req.body.address,
    req.body.phoneNum,
    req.body.position,
    req.body.workState,
    req.body.livingState,
    req.body.name,
    "%" + req.body.SSN,
  ];
  console.log(data);
  con.query(stmt, data, (err, results, fields) => {
    console.log(results);
    res.send(results);
    if (err) {
      return console.error(err.message);
    }
  });
});

//delete employee
app.post("/deleteemployee", function (req, res) {
  let name = req.body.name;
  con.query(
    "DELETE FROM employee WHERE Name = ?",
    name,
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
});

//PAST_EMPLOYEE
//get past_employee
app.get("/pastemployees", function (req, res) {
  con.query("SELECT * FROM past_employee", function (err, results, fields) {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.post("/insertpastemployees", function (req, res) {
  let stmt =
    "INSERT INTO past_employee (Name, Salary, Position, Phone_Number, Email, ReasonOfLeaving) VALUES (?, ?, ?, ?, ?, ?)";
  let data = [
    req.body.name,
    req.body.salary,
    req.body.position,
    req.body.phoneNum,
    req.body.email,
    req.body.reasonofleaving,
  ];
  con.query(stmt, data, function (err, results, fields) {
    if (err) throw err;
    console.log(results);
    // res.send(results);
  });
});

app.put("/updatepastemployee", function (req, res) {
  console.log(req.body);
  let stmt =
    "UPDATE past_employee SET Name = ?, Salary = ?, StartDate = ?, Position = ?, Phone_Number = ?, Email = ?, ReasonOfLeaving = ? WHERE NAME = ?;";
  let data = [
    req.body.name,
    req.body.salary,
    req.body.startdate,
    req.body.position,
    req.body.phone_number,
    req.body.email,
    req.body.reasonofleaving,
  ];
  con.query(stmt, data, (err, results, fields) => {
    res.send(results);
    if (err) {
      return console.error(err.message);
    }
  });
});


//update total employee hours
app.put("/updatehours", function(req,res){
  console.log(req.body);
  let stmt = "UPDATE employee SET Hours_Worked = ? WHERE NAME = ?;"
  let data = [
    req.body.hoursWorked,
    req.body.name
  ]
  con.query(stmt, data, (err, results, fields) => {
    res.send(results);
    if(err) {
      return console.error(err.message);
    }
  })
})

//======PAYROLL======
//get the most recent payroll of one employee
app.post("/getRecentPayroll", function (req, res) {
  const stmt =
    "Select * FROM payroll WHERE Name = ? AND PaycheckDate = (select max(PaycheckDate) from payroll where Name = ? );";
  console.log(req.body);
  const data = [req.body.name, req.body.name];
  con.query(stmt, data, function (err, results, fields) {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

//add payroll into the db after running the payroll for an employee
app.post("/postPayroll", function (req, res) {
  let stmt =
    "INSERT INTO payroll (Name, HoursWorked, Salary, PaycheckDate, GrossPay, Taxes, Benefits, Total) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
  let data = [
    req.body.name,
    req.body.workingHours,
    req.body.salary,
    req.body.paycheckDate,
    req.body.grossPay,
    req.body.taxes,
    req.body.benefits,
    req.body.total,
  ];
  console.log(data)
  con.query(stmt, data, function (err, results, fields) {
    if (err) throw err;
    console.log(results);
  });
});

//get every paycheck from one employee
app.post("/getEmployeePaychecks", function (req, res) {
  const stmt = "Select * FROM payroll WHERE Name = ?;";
  console.log(req.body);
  const data = [req.body.name, req.body.name];
  con.query(stmt, data, function (err, results, fields) {
    if (err) throw err;
    console.log(results);
    res.send(results);
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
