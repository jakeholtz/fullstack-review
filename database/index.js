var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  id:  Number,
  name: String,
  full_name: String
  }
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;
