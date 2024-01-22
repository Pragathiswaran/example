var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "praga",
    password: "password"
});

con.connect(function(err){
    if(err) throw err;
    console.log("conncetion succesfull");
});