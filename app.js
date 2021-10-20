const express = require("express");
const app = express();
var cors = require('cors');
const sql = require("mysql");

//allows for middleware to work
app.use(cors());

//connect to database (pls modify user and password if needed to connect locally)
const con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "wepay"
})

//connect to the database
con.connect((err) => {
  if (err) throw err;
  console.log("DB Connected.")
})

//testing to get the result from the DB
app.get("/", function (req, res) {
  con.query("SELECT * FROM employee", function (err, result, fields){
    if(err) throw err;
    console.log(result)
    res.send(result);
  }) 

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
