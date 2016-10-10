var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  var thisUrl = req.url;
  var src = req.query.src;
  if(src==undefined){
    src='null';
  }
  var shareUrl = encodeURIComponent((global.browserURL + thisUrl).split('#')[0]);
  console.log('shareUrl.................'+(global.browserURL + thisUrl).split('#')[0]);
  superagent
    .get(global.wechatURL + '/wechat_api/jsconfig?url=' + shareUrl)
    .end(function(err2, res2) {
      if (res2 !== undefined && res2.ok) {
        res2.body.browserUrl = global.browserURL;
        res2.body.src=src;
        res.render('index',res2.body);
      } else {
        console.error('微信分享api错误。');
      }
    });
});

router.get('/index', function(req, res, next) {
  var thisUrl = req.url;
  var src = req.query.src;
  if(src==undefined){
    src='null';
  }
  var shareUrl = encodeURIComponent((global.browserURL + thisUrl).split('#')[0]);
  console.log('shareUrl.................'+(global.browserURL + thisUrl).split('#')[0]);
  superagent
    .get(global.wechatURL + '/wechat_api/jsconfig?url=' + shareUrl)
    .end(function(err2, res2) {
      if (res2 !== undefined && res2.ok) {
        res2.body.browserUrl = global.browserURL;
        res2.body.src=src;
        res.render('index',res2.body);
      } else {
        console.error('微信分享api错误。');
      }
    });
});

module.exports = router;
