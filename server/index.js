var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos/import', function (req, res) {

  let username = req.body.username;

  request({
    url: 'https://api.github.com',
    method: 'GET',
    headers: {'user-agent': 'jakeholtz'},
    authorization: '1e01d19a296bd3c2cb9425b8f001482148d1ff48',
    data: username
    }, function (error, response, body) {
      if (error) {
        console.log('REQUEST error:', error);
        console.log('REQUEST statusCode:', response && response.statusCode);
        console.log('REQUEST body:', body);
      } else {
        console.log('SUCCESS!')
      }
    }
  )

  // VIA EXPRESS when you get a post req from client(with username)
  // if successful
    // use npm library to connect with github library
    // get all repos with username

  // Complete the /repos/import route on your express server -
  // in this route, you'll use the npm request library to fetch that
  // user's Github repositories from the Github API.
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
