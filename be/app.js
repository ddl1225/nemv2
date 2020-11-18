var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors =  require('cors')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(cors())
app.use('/api',  require('./routes/api'))
app.use(express.static(path.join(__dirname, '../','fe','dist')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({msg: err.message})
});

module.exports = app;
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name:{ type: String, default:''},
  age:{ type: Number, default:1}

})

const User = mongoose.model('User',userSchema)


//몽구스 사용방법
//몽구스 연결

mongoose.connect('mongodb://localhost:27017/nemv',{useNewUrlParser:true,  useUnifiedTopology: true }, function (err) {
  if (err) return console.log(err)
  console.log('mongoose 연결')

  // User.create ({ name: '하하'})
  //     .then(r => console.log(r))
  //     .catch(e => console.error(e))

  User.find()
      .then(r => console.log(r))
      .catch(e => console.error(e))

    // User.updateOne({_id: '5fb4c3b3d78d430e807b8221'},{$set: {age: 1009} })
    // .then(r => {
    //   console.log(r)
    //   console.log('updated')
    //   return User.find()
    // })
    //     .then(r => console.log(r))
    //   .catch(e => console.error(e))

    // User.deleteOne({name: '하하'})
    //   .then(r => console.log(r))
    //   .catch(e => console.error(e))

})

//몽구스 모듈 + 스키마
