var OAuth = require('oauth');

function search (req, res){
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
    `https://api.twitter.com/1.1/search/tweets.json?q=%23superbowl&result_type=recent`,
    '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR',
    '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY',
    (err,data) => {
      res.send(data);
    });
};

module.exports = {
  search
}
