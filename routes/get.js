var express = require('express');
var router = express.Router()
var controller = require('../controller/getController')

router.get('/', controller.get)


module.exports = router;
