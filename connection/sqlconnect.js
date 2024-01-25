var con = require("./connect");

con.connect(function(err){
    if(err) throw err;
    console.log("conncetion succesfull");
    var sql = "SELECT * FROM validation ;";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
    })