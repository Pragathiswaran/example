var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url,function(err,db){
    if (err) {
        console.log(err);
        throw err;
    }
    var dbo=db.db("demo");
    var obj = {name : "pragathiswaran", rollno : 1223};
    dbo.collection("student").insertOne(obj,function(err,res){
        if (err){
            console.log(err);
            throw err;
        }
         
        console.log("1 row is inserted");
        db.close();
    });
});