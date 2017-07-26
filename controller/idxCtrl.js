// controller
'use strict'
const OAuth = require('oauth');

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  // consumer key
  'ze9Udi9U8EUG3rXZKNBEEAYmz',
  //secret
  'tr8DlCZ6lKdlsqQrjWCVa62K1La2zfZG0gd1TDH5Ot9IEPuOV4',
  '1.0A',
  null,
  'HMAC-SHA1'
);

// oauth.get(
//   'https://api.twitter.com/1.1/trends/place.json?id=23424977',
//   '890049944337301504-gFp6GclgFuxHJAIQ34eGOWSUxvVhsFq', //test user token
//   '6oHMeXg7h1N2dIiRSuqOkrNhV4OoYZubenqOPZFcMCY83', //test user secret
//   function (e, data, res){
//     if (e) console.error(e);
//     console.log(require('util').inspect(data));
//     // done();
// });

exports.timeline = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    '890049944337301504-gFp6GclgFuxHJAIQ34eGOWSUxvVhsFq', //test user token
    '6oHMeXg7h1N2dIiRSuqOkrNhV4OoYZubenqOPZFcMCY83', //test user secret
    function (e, data, r){
      if (!e) res.send(data);
      else res.status(500).send(e)
  });
}