var express = require('express');
var router = express.Router();
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'ABl9VeJLhyqV60zPuNFvlDQKl',
  'KSarNlcX428VX8SRrm2MQpsrIiYqoBTGKYhVSjZXxFaNiYy59u',
  '1.0A',
  null,
  'HMAC-SHA1'
);


router.post('/', function(req, res, next) {
  var tweet = req.body.tweet;
  oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=${tweet}`,
      '246398684-g9Mn1uLHdqueTJMBPyftg8XtyKelDRfNhHwXexuC', //test user token
      'VyetFP81KpfDgAHYpHxyJlJPF1MmdkZwkN4f61g9wSQJB', //test user secret
      'your tweet',
      'text',
      function (err, data, ress){
        if (!err) {
          res.send(data)
        } else {
          res.send(err)
        }
      });
});

module.exports = router;
