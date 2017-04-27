var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos/import', function (req, res) {

  // Complete the /repos/import route on your express server in this route, you'll use
  // the npm request library to fetch that user's Github repositories from the Github API.

  let username = req.body.username
  let authKey = '1e01d19a296bd3c2cb9425b8f001482148d1ff48';
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos?access_token=' + authKey,
    method: 'GET',
    headers: {'user-agent': 'jakeholtz'}
  }

  request(options, function (error, response, body) {
      if (error) {
        console.error(error);
      } else {
        console.log("SERVER-GITHUB GET Success!");
      }

      let repos = JSON.parse(body);
      for (var i = 0; i < repos.length; i++) {
        db.collection.insert({
          "id": body[i].id,
          "name": body[i].name,
          "full_name": body[i].full_name
        });
      }
    }
  )
  res.end();
});

app.get('/repos', function (req, res) {
  res.end()
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
