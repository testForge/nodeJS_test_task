var morgan_logger = require('./logger');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var node_sass = require('./node-sass');
var express = require('express');

module.exports = function(app){
    app.use(morgan_logger);
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(node_sass);
    app.use(express.static(path.join(__dirname, '/../public')));
};