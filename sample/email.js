var email = require('nodemailer');

var trans = email.createTransport({
    service: "gmail",
    auth: {
        user: "mpragathiswaran@gmail.com",
        pass: "Praga@009"
    }
});
var mailoption = {
    from: "mpragathiswaran@gmail.com",
    to:"praga0908@gmail.com",
    subject: "node test",
    text: "hii praga"
};

trans.sendMail(mailoption,function(err,result){
    if (err){
        console.log(err);
    } else {
        console.log("email successfull"+res.response)
    }
});