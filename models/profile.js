var mongoose = require('mongoose'),
Schema = mongoose.Schema;


 var ProfileSchema = new Schema({
      name: String,
      github_link: String,
      twitter_link: String,
      current_city: String
 });


var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
