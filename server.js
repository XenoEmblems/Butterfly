var express = require('express');
var app = express();
var path = require('path');
var lesshat= require('lesshat');


app.use(express.static(__dirname + '/public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(8080);
