var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function(req, res, next) {
    const us = [
        {
            name: '김김',
            age: 14
        },
        {
            name: 'dldldl',
            age: 24
        },
    ]
    res.send({users: us})
});


router.all('*', function(req, res, next) {
    next(createError(404, '그런 api1없어요'));
});

module.exports = router;
