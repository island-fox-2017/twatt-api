var OAuth = require('oauth');

function timeline2 (req, res){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'O7HMzJ1azSLwRJFCwjkRtEQo7',
    '0CXFcbqWG9wGYwZbDE6I3NOA9Psq7MVoMb9e0S2Mdbl6QXeh29',
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  let query = req.query.screen_name;
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${query}`,
  //  `https://api.twitter.com/1.1/statuses/home_timeline.json`,
    '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR',
    '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY',
    (err,data) => {
      //grab each status..
      statusText = [];
      data = JSON.parse(data);
      data.forEach(d => {
       statusText.push(d.text);
      });
      res.send(statusText);
      //res.send(data);
    });
};

module.exports = {
  timeline2
}
