var express = require('express');
var createError = require('http-errors');
var router = express.Router();


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
//읽는다
router.get('/', function(req, res, next) {
    console.log(req.query)
    console.log(req.body)

    res.send({users: us})
});
//보낸다
router.post('/', function(req, res, next) {
    console.log(req.query)
    console.log(req.body)
    res.send({success: true , msg: '포스트'})
});

//수정
router.put('/', function(req, res, next) {
    console.log(req.query)
    console.log(req.body)
    res.send({success: true, msg: '수정'  })
});
//삭제
router.delete('/', function(req, res, next) {
    console.log(req.query)
    console.log(req.body)
    res.send({success: true , msg: '삭제'})
});









router.all('*', function(req, res, next) {
    next(createError(404, '그런 api1없어요'));
});

module.exports = router;
