var createError = require('http-errors');
var express = require('express');
var router = express.Router();


///종속
router.use('/test', require('./test'))

router.use('/user', require('./user'))







router.all('*', function(req, res, next) {
  next(createError(404, '그런 api없어요'));
});

module.exports = router;
