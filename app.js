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

// Our apiRouter
const apiRouter = require("./routes/index");

app.use("/api", apiRouter);

//connect to the database
con.connect((err) => {
  if (err) throw err;
  console.log("DB Connected.");
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
