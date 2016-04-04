var mongoose = require('mongoose'),
Schema = mongoose.Schema;


 var MusicSchema = new Schema({
      artist: String,
      genre: Date,
      origin: String,
 });


var Music = mongoose.model('Music', MusicSchema);

module.exports = Music;
