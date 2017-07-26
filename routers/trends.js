'use strict'

const express = require('express');
const router = express.Router();
const OAuth = require('oauth');
require('dotenv').config()


var myOauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

router.get('/', (req, res, done) => {
  myOauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.ACCESS_TOKEN, // user token
    process.env.ACCESS_TOKEN_SECRET, // user secret
    function (e, data, res2){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      res.send(data);
    });
});

module.exports = router;
