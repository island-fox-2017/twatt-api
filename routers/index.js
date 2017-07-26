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
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    function (e, data, res2){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      res.send(data);
    });
});

router.post('/search', (req, res) => {
  let keyword = req.body.keyword;
  myOauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    function (e, data, res2){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      res.send(data);
    });
})

router.post('/tweet', (req, res) => {
  let tweet = req.body.tweet;
  myOauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${tweet}`,
    process.env.ACCESS_TOKEN, //test user token
    process.env.ACCESS_TOKEN_SECRET, //test user secret
    '',
	  'text', //emang text gini aja
	   (e, data, res2) => {
  		if (e) console.error(e);
  		res.send(data);
  	});
})

module.exports = router;
