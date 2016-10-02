var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');


app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, '../client')));
app.use('/vendor', express.static(__dirname + '/../../vendor'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/', function (req, res) {
    res.render('index.html');
});


var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Your app listening at http://%s:%s', host, port);
});
