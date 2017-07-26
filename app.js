'use strict'

const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));

app.set('view engine', 'ejs');

const index = require('./routes/index');

app.use('/', index);


app.listen(3000, () => console.log('Listening...'))
