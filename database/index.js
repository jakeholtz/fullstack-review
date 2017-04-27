var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// var db = mongoose.connection;
//   db.on('error', console.error.bind(console, 'connection error:'));
//   db.once('open', function() {
//   console.log("We're connected!");
// });

var repoSchema = mongoose.Schema({
  id:  Number,
  name: String,
  full_name: String
  }
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;
