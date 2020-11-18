var express = require('express');
var createError = require('http-errors');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send({msg: '테스트야',  a: '괘아ㅏㄴ괘나아'})
});

router.get('/hello', function(req, res, next) {
  res.send({msg: '테스트야',  a:3333})
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api1없어요'));
});

module.exports = router;
