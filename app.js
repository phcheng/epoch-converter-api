var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var MYPORT = process.env.PORT || '8080';
var app = express();
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static('public'));
var router = express.Router();

router.use(function (request, response, next) {
    console.log("REQUEST:" + request.method + "   " + request.url);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// GET
router.route('/').get(function (request, response) {
    var timestamp = Date.now();
    var time = {
        "timestamp": moment(timestamp).unix().valueOf(),
        "human_date": moment(timestamp).local().format("DD-MM-YYYY HH:mm:ss")
    };
    response.json(time).end();
});

// GET
router.route('/:timestamp').get(function (request, response) {
    var timestamp = request.params.timestamp;
    var time = {
        "timestamp": timestamp,
        "human_date": moment.unix(timestamp).format("DD-MM-YYYY HH:mm:ss")
    };
    response.json(time).end();
});

// GET
router.route('/:timestamp/:format').get(function (request, response) {
    var timestamp = request.params.timestamp;
    var format = request.params.format;
    var time = {
        "timestamp": timestamp,
        "human_date": moment.unix(timestamp).format(format)
    };
    response.json(time).end();
});

// Start the server
app.use('/', router);
app.listen(MYPORT);

// Announce ourselves
console.log("Server started on port: " + MYPORT);
