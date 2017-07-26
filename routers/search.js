const express = require('express');
const oauth = require('oauth');

var router = express.Router();

var _twitterAPIKey = "pLOvGAWll8QSxAR32jtbeaGsY";
var _twitterAPISecret = "FrXjrGbiMttZUdvIUQXRoO8F6YE2xPNimARpCal1X3yTKoQDdS";


var newOauth = new oauth.OAuth(`https://api.twitter.com/oauth/request_token`,
      `https://api.twitter.com/oauth/access_token`,
      _twitterAPIKey,
      _twitterAPISecret,
      "1.0A",
      null,
      `HMAC-SHA1`
    );
    
    let token = `87119074-RiNBSdjmIjEHLPoOZaesVJ5u6Bf9315hLI0Bl9DDQ`;
    let secret = `B1Kez4GA3cN1p5kS60wLmPKrt4hPPB1rkYzBqWdrsSrt1`;
  
  router.get('/search', (req, res) => {
    let params = req.params.q
    newOauth.get(`https://api.twitter.com/1.1/search/tweets.json?q=${params}`,
        token, //test user token 
        secret, //test user secret
      (err, data) => {
        if(!err){
          var parseData = JSON.parse(data)
          console.log(parseData);
          res.send(parseData)
        }else{
          console.log(err);
        }
      })
  })
  
  
  module.exports = router;
