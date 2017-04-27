var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // console.log(JSON.stringify(req));
  //
  // res.send('POST request to homepage');

  // When a user types a github username into the text field, use jQuery's ajax
  // method to send a POST request to /repos/import (you'll have to fix the bug
  // in the Search Component first).

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
