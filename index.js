var express = require('express');
var app = express();
var mongoose = requier('mongoose');
var Todo = require('./model/todoModels');
var config= require('./config');

var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname+'/pubic'));

mongoose.connect(config.getDbConnectionString());

app.listen(port);
