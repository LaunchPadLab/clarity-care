var express = require('express');
var app = express();
var path = require('path');

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.set('port', process.env.PORT || 8100);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
