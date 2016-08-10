/**
 * Created by abc on 10/08/2016.
 */
var express=require("express");
var bodyParser=require("body-parser");

var app=express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello world!");
});

app.listen(3003,function () {
    console.log("RSS Server 3003 is started");
});