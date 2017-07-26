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

/* GET users listing. */
router.get('/', function(req, res, next) {
  oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '246398684-g9Mn1uLHdqueTJMBPyftg8XtyKelDRfNhHwXexuC', //test user token
      'VyetFP81KpfDgAHYpHxyJlJPF1MmdkZwkN4f61g9wSQJB', //test user secret
      function (err, data, ress){
        if (!err) {
          res.send(data)
        } else {
          res.send('error')
        }
      });
});

module.exports = router;
