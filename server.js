var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var path = require('path');

// Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/question5.html'));
});

app.get('/question5.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/question5.html'));
});

app.get('/question4.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/question4.html'));
});

app.get('/question3.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/question3.html'));
});

app.get('/question2.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/question2.html'));
});

app.get('/question1.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/question1.html'));
});

app.get('/thankyou.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/thankyou.html'));
});

app.listen(8080);
