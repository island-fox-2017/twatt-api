var express = require('express');
var router = express.Router()
var controller = require('../controller/timelineController2')

router.get('/', controller.timeline2)


module.exports = router;
