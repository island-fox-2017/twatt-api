var OAuth = require('oauth');

function post (req, res){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'O7HMzJ1azSLwRJFCwjkRtEQo7',
    '0CXFcbqWG9wGYwZbDE6I3NOA9Psq7MVoMb9e0S2Mdbl6QXeh29',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  let query = req.body.quote;
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${query}`,
    '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR',
    '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY',
    query,
    'text',
    (err,data) => {
    if(err) {console.log(err);}
    else {res.send(data);}
    });
};

// 	(e, data, res) => {
// 		if (e) console.error(e);
// 		console.log(e);
// 		cb(data);


module.exports = {
  post
}
