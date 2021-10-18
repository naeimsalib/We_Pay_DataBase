const express = require("express");
const app = express();


app.get("/", function(req, res){
  res.send("Welcome to WePay!");
  });


const startListening = () => {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!`);
  })
}

const bootApp = async () => {
  await startListening();
}

//Run the application
bootApp();
