const oauth = require('oauth')
require('dotenv').config()

var myOauth = new oauth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.APP_CONSUMER_KEY,
  process.env.APP_SECRET_KEY,
  '1.0A',
  null,
  'HMAC-SHA1'
);

function trends(req, res) {
  myOauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.USER_TOKEN,
    process.env.USER_SECRET_KEY,
    (err,data) => {
      if(!err) {
        res.send(data)
      } else {
        res.send(err)
      }
    }
  )
}

function timeline(req, res) {
  myOauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.USER_TOKEN,
    process.env.USER_SECRET_KEY,
    (err,data) => {
      if(!err) {
        res.send(data)
      } else {
        res.send(err)
      }
    }
  )
}

function searchTweets (req, res){
  let params = req.query.key
  myOauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${params}`,
    process.env.USER_TOKEN,
    process.env.USER_SECRET_KEY,
    (err,data) => {
      if(!err) {
        res.send(data)
      } else {
        res.send(err)
      }
    }
  )
}

function postNgetweet(req, res){
  let ngetweet = req.query.status
  myOauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${ngetweet}`,
    process.env.USER_TOKEN,
    process.env.USER_SECRET_KEY,
    ngetweet,
    'txt',
    (err,data) => {
      if(!err) {
        res.send(data)
      } else {
        res.send(err)
      }
    }
  )
}

module.exports = {
  trends,
  timeline,
  searchTweets,
  postNgetweet
}
