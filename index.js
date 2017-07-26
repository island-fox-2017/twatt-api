describe('OAuth1.0',function(){
  var OAuth = require('oauth');

  it('tests trends Twitter API v1.1',function(done){
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
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR', //test user token
      '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        console.log(require('util').inspect(data));
        done();
      });
  });
});
