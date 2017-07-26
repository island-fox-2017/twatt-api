var express = require('express');
var router = express.Router()
var controller = require('../controller/timelineController')

router.get('/', controller.timeline)


module.exports = router;
