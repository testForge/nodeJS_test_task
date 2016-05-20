'use strict';
var express = require('express');
var router = express.Router();

router.notesController = require('./notes');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("Lang","en");
  res.render('index', { i18n: res });
});


module.exports = router;
