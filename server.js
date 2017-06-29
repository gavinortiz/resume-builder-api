var express = require('express');
var app = express();
var mongoose = require('mongoose');


var port = process.env.PORT || 8081;
var morgan = require('morgan');

app.use(morgan('dev'));


var routes = null;


app.listen(port);