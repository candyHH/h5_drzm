
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//需要在各自的环境运行 export NODE_ENV=development

if (app.get('env') === 'development'){
  //开发环境
	global.baseURL = 'http://dev.lalocal.cn:8080';
  global.wechatURL = 'http://node.lalocal.cn';
  global.browserURL = 'https://dev.lalocal.cn/wechat/h5drzm';//浏览器实际url
}else if (app.get('env') === 'production'){
	// 生产环境
	global.baseURL = 'http://10.117.198.127:8080';
  global.wechatURL = 'http://node.lalocal.cn';
  global.browserURL = 'https://h5.lalocal.cn/h5drzm';
}else if (app.get('env') === 'localhost'){
	// 本地
	global.baseURL = 'http://dev.lalocal.cn:8080';
  global.wechatURL = 'http://node.lalocal.cn';
  global.browserURL = 'http://192.168.10.222/h5drzm';
}else{
	global.baseURL = 'http://dev.lalocal.cn:8080';
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
