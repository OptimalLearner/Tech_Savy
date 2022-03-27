const express = require('express');
const app = express();
const routes = require('./routes/index.js')

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/muzikchain', { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.set('useCreateIndex', true);

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', routes)


app.use((req, res, next) => {
    const error = new Error('not found')
    error.starus = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;