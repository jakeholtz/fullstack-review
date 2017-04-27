var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos/import', function (req, res) {
  var url = req.body.url;
  return function() {
    null;
  }

  // Complete the /repos/import route on your express server -
  // in this route, you'll use the npm request library to fetch that
  // user's Github repositories from the Github API.

  // TODO
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
