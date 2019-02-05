var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/Student.js');

/* GET ALL StudentS */
router.get('/', function(req, res, next) {
  Student.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Student ID */
router.get('/:id', function(req, res, next) {
  Student.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Student */
router.post('/', function(req, res, next) {
  console.log('new student', req.body);
  req.body.house = getWhatHouse(req.body);
  console.log('does this get set?', req.body);
  Student.create(req.body, function (err, post) {
    console.log(err);
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Student */
router.put('/:id', function(req, res, next) {
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Student */
router.delete('/:id', function(req, res, next) {
  Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

function getWhatHouse(student) {
  console.log('this happened');
  choicesArray = [];
  if( student.isBrave ){
    choicesArray.push('Gryffindor');
  }
  if( student.isAhole ){
    choicesArray.push('Slytherin');
  }
  if( student.isSmart ){
    choicesArray.push('Ravenclaw');
  }
  if( student.justHere ){
    choicesArray.push('Hufflepuff');
  }


  var randomNumber = Math.floor(Math.random()*choicesArray.length);



  return choicesArray[randomNumber];

}

module.exports = router;

