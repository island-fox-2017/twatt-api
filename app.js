const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const search = require('./routers/search');
const timeline = require('./routers/timeline')
const post = require('./routers/post')


var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api', search);
app.use('/api', post);
app.use('/api', timeline);



app.listen(3000)
