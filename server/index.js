const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/demo');

const UserSchema =new mongoose.Schema({
    name : String
});

const userModel = mongoose.model('student', UserSchema);

app.get('/', (req, res) => {
    userModel.find({})
        .then(function(students) {
            res.json(students);
        })
        .catch(function(err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});
app.listen(3001, ()=>{
    console.log("server is running");
});