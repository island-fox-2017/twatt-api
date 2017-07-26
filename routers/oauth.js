const express = require('express');
const router = express.Router();
const oauthCont = require('../controllers/oauthController')

router.get('/trends',oauthCont.trends)
router.get('/timeline', oauthCont.timeline)
router.get('/search', oauthCont.searchTweets)
router.post('/ngetweet', oauthCont.postNgetweet)

module.exports = router
