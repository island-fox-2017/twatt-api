// routes
'use strict'

const router = require('express').Router();
const OAuth = require('oauth');

const idxCtrl = require('../controller/idxCtrl');

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


router.get('/api/', idxCtrl.defaultTimeline)
router.get('/api/search?:q', idxCtrl.search)
router.get('/api/trending', idxCtrl.trending)
router.get('/api/user?:q', idxCtrl.otherUserTimeline)

router.post('/api/twat', idxCtrl.post)


module.exports = router;