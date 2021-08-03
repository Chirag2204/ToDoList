const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
app.use(express.static("public"));

let items = ["Wake Up","WorkOut","Breakfast"];
let workitems = [];

 app.get("/",function(req,res){


  let currentDate = date.getDate();

  res.render("list",{
    listTitle : currentDate,
      newTasks : items
  });
})

app.get("/work",function(req,res){
  res.render("list",{
    listTitle : date.getDay()+"'s Work",
    newTasks : workitems
  });
})

app.get("/about",function(req,res){
  res.render("about",{});
})

app.post("/",function(req,res){
  var listName = req.body.button;
  if (listName === "Work") {
    var item = req.body.task;
    workitems.push(item);
    res.redirect("/work");
  }else {
    var item = req.body.task;
    items.push(item);
    res.redirect("/");
  }

})

app.listen(process.env.PORT || 3000,function(req,res){
  console.log("Server Started successfully");
})
