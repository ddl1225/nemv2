var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users');

//읽는다
router.get('/', function(req, res, next) {
    User.find()
        .then(r => {
            res.send({success:true, user:r})
        })
        .catch(e => {
            res.send({success:false})
        })
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
