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
    const {name,age} = req.body
    const u = new User({name,age})
    u.save()
        .then(r=> {
            res.send({success:true, msg:r})
        })
        .catch(e =>{
           res.send({success: false, msg:e.message})
        })
    // console.log(req.query)
    // console.log(req.body)
    // res.send({success: true , msg: '포스트'})
});

//수정
//url 파라미터넘기는법
router.put('/:id', function(req, res, next) {
    const id =req.params.id
    const {name,age} = req.body
    User.updateOne({_id: id}, {$set:{name, age}})
        .then(r=> {
            res.send({success:true, msg:r})
        })
        .catch(e =>{
            res.send({success: false, msg:e.message})
        })

    // console.log(req.query)
    // console.log(req.body)
    // res.send({success: true, msg: '수정'  })
});
//삭제
router.delete('/:id', function(req, res, next) {
    const id =req.params.id
    User.deleteOne({_id: id})
        .then(r=> {
            res.send({success:true, msg:r})
        })
        .catch(e =>{
            res.send({success: false, msg:e.message})
        })
    res.send({success: true , msg: 'del OK'})
    // console.log(req.query)
    // console.log(req.body)
    // res.send({success: true , msg: '삭제'})
});









router.all('*', function(req, res, next) {
    next(createError(404, '그런 api1없어요'));
});

module.exports = router;
