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

/////// put function to make changes on data (update)
app.put("/todos", (req,res)=>{
    const {id,task,isCompleted, isDel} = req.body
    let check = false;

   todos.forEach((todo)=>{
       if (todo.id == id) {
        if (task != undefined){
            todo.task = task;
        } else if(isCompleted != undefined){
            todo.isCompleted = isCompleted
        } else if (isDel != undefined){
            todo.isDel= isDel
        }
        
        check = true;
    } })
    if (check){
        fs.writeFile("./todos.json", (err,res)=>{
            if(err){
                return err.message
            }
            else {
                res.status(200).json(todos)
            }
        })
    } else { res.status(404).json("no such a task")}

})

//// GET/READ the data to the router 
app.get("/todos", (req,res)=>{
    res.status(200).json(todos)
})







app.listen(PORT, () => {
  console.log(`this server started on ${PORT}`);
});
