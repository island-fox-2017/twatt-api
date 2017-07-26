const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("Welcome To OAuth 1 using Twitter API!"));

module.exports = router;
