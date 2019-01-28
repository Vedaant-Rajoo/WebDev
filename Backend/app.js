var express = require("express");
var app = express();
// "/" => "Hi there!!"
app.get("/", function(req, res) {
    res.send("Hi There!! ");

});
app.listen(3000, function() {
    console.log("serving helloworld on port 3000");
});