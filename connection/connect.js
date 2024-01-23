var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "praga",
    password: "password",
    database: "timeline"
});

con.connect(function(err){
    if(err) throw err;
    console.log("conncetion succesfull");
    var sql = "INSERT INTO validation (username,email,phone,password) VALUES ('pragathiswaran','90909090','email@email.com','password');";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("1 record inserted");
    })
});