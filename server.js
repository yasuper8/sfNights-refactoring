"use strict"

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./model/user.js');

var app = express();
var router = express.Router();

var currentUserLocation = {
  "lat": null,
  "lng": null
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Credentials", 'true');
 res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
 res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
 res.setHeader("Cache-Control", "no-cache");
  next();
});

app.post('/signup', function(req, res){
  console.log(server);
  res.json({res: "some res"});
    // User.createSecure(req.body.name, req.body.email, req.body.dob, req.body.password, function(err, user){
    //   if(err){console.log(err);}
    //   res.json(user);
    // });
});

app.get('/position', function(req, res){
  res.json({lat:currentUserLocation["lat"], lng:currentUserLocation["lng"]});
});

app.post('/setcurrentlocation', function(req, res){
  currentUserLocation["lat"] = req.body.lat;
  currentUserLocation["lng"] = req.body.lng;
});

var server = app.listen(process.env.API_PORT || 3001);
