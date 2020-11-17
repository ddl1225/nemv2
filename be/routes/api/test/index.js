var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({msg: '테스트야',  a:3333})
});

router.all('*', function(req, res, next) {
  next(createError(503, '그런 api없어요'));
});

module.exports = router;
