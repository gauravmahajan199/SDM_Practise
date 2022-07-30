var express=require('express');
var app=express();



app.get("/",(req, res)=>{
    res.send(
            "<h1>Gaurav Mahajan </h1>"
            +"<hr/>"
            +"<h3>Address: Plot no 7, gat no 80/1/2/B,Sai Park,Jalgaon</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>PG-DAC</li>"
            +"<li>Mechanical Engineering</li>"
            +"<li>Diploma in Mechanical Engineering </li>"
            +"<li>Hobbies: cricket, travelling</li>"
            +"<li>Strengths: calm, flexible, team player </li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Room 3 </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: Ravi Tambade</li>"
            +"<li>Director: Shubhangi Tambade</li>"
            +"<li>Subject Matter Expert: Rohit Gore</li>"
            + "</ol>"
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(8080);
console.log("Chrome Online shopping running on port 8080");