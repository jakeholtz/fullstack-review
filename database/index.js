const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const Schema = mongoose.Schema;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("SERVER-DATABASE Success!");
});


var repoSchema = new Schema({
  id:  Number,
  name: String,
  full_name: String
});


var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;
