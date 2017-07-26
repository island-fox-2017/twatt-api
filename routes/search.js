var express = require('express')
var router = express.Router()
var controller = require('../controller/searchController')

router.get('/', controller.search )

module.exports = router
