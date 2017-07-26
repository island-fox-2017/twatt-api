var OAuth = require('oauth');

  function get (req, res){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'O7HMzJ1azSLwRJFCwjkRtEQo7',
      '0CXFcbqWG9wGYwZbDE6I3NOA9Psq7MVoMb9e0S2Mdbl6QXeh29',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      //'https://api.twitter.com/1.1/search/tweets.json',
    //  'https://api.twitter.com/1.1/trends/place.json?id=23424977',
       'https://api.twitter.com/1.1/trends/place.json?id=1',
      '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR', //test user token
      '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY', //test user secret
      function (err, data){
        if (!err) {
          //console.log(data);
          //return data
          res.send(data)
        }
      });
  };

  //console.log(search());

  module.exports = {
    get
  }
