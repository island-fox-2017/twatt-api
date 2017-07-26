"use strict"

const OAuth = require('oauth');

let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'wzEP7J7jJIutXpbEcC9ztkfrs', //consumer key - API key
  'pd9p9XMOYs07euJZDZu0Bj5g9EfhTTmsVoG0zTJYGTd1m4pcms', //consumer secret
  '1.0A',
  null,
  'HMAC-SHA1'
);

let show = (req, res) => {
oauth.get(
  'https://api.twitter.com/1.1/trends/place.json?id=23424977',
  '130388806-clVQ8mAXkowwbkxLd5rDZgbQq1LiUngsLhhpavxQ', //access_token
  'TGqwJWto2NtKZvsWI1CwVODiB2KrNaVwZpOUph5wQgfhL', //access_token secret
  function(e, data, r){
    if(!e) res.send(data)
    else res.status(500).send(e)
  });
}

module.exports = {
  show
};
