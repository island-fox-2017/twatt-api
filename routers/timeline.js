'use strict'

const express = require('express');
const router = express.Router();
const OAuth = require('oauth');

var myOauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '8jtEGqO0rGAnjHuHvWHxLq4kO',
      'wzQPdtZZ7L1wh9haELP3pLfvIcGga8Pxh7sDGJ6B4F4De0HadT',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

router.get('/', (req, res, done) => {
  myOauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    '82060866-srtvJaMl8CQXVgBzuU4VUzvw7rEVDVXrr4Z1FMtj0', //test user token
    'Cw8D8K2ddfFscHyByWbFibO6pQCsqMWkOJTvnCK34gJa6', //test user secret
    function (e, data, res2){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      res.json(data);
    });
});

module.exports = router;
