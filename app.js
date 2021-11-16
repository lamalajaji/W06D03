const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 4000;

//// app level middleware
app.use(express.json());

let todos = [];
//// read function to read the data from json file
fs.readFile("./todos.json", (err, data) => {
  if (err) {
    return err.message;
  } else {
    todos = JSON.parse(data.toString());
  }
});

app.listen(PORT, () => {
  console.log(`this server started on ${PORT}`);
});
