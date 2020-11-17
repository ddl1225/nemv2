var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({msg: '안녕',  a:1})
});

router.get('/user', function(req, res, next) {
  res.send({msg: '안녕',  a:1})
});

router.post('/user', function(req, res, next) {
  res.send({msg: '안녕',  a:1})
});

///종속
router.use('./test', require('./test'))

router.delete('/hello', function(req, res, next) {
  res.send({msg: '안녕',  a:1})
});




router.all('*', function(req, res, next) {
  next(createError(503, '그런 api없어요'));
});

module.exports = router;
