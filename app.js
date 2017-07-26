'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Index = require('./routers/index');
const Timeline = require('./routers/timeline');

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

app.use('/', Index);
app.use('/timeline', Timeline)

app.listen(process.env.PORT || 3000);
