var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
// var config = require('./config');
var cors = require('cors');
// var rbac = require('./RBAC/RBAC');
// var bot = require('./Botkit/bot');
// var permissions = require('./Permission/Permission');
// var roles = require('./Role/InitRole');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '../client')));
app.use('/assets', express.static(__dirname + '/../assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/', function (req, res) {
    res.render('index.html');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Status Report app listening at http://%s:%s', host, port);
});
