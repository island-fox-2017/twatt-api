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

router.post('/', (req, res) => {
  let tweet = req.body.tweet;
  myOauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${tweet}`,
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    '',
	  'text', //emang text gini aja
	   (e, data, res2) => {
  		if (e) console.error(e);
  		res.send(data);
  	});
})

module.exports = router;
