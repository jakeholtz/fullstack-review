var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // console.log(JSON.stringify(req));
  // //
  // res.send('POST request to homepage');
  // .get('http://google.com/img.png')
// .on('response', function(response) {
//   console.log(response.statusCode) // 200
//   console.log(response.headers['content-type']) // 'image/png'
// })

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
