const express = require("express");
const app = express();
const fs = require("fs");



const PORT =  4000;



//// app level middleware
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`this server started on ${PORT}`);
})