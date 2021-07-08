const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    if (email === 'aryan' && password === '123') {
        jwt.sign({ _id: "92828" }, "helloAryanSharmaHowAreYouAreYouFineIAmAlwaysThereForYou", (err, token) => {
            if(err){
                res.sendStatus(403);
            }else{
                res.json({
                    token
                })
            }
        })
    }
    else{
        res.sendStatus(403)
    }
})

app.listen(3000, function () {
    console.log("Server started at port 3000")
});