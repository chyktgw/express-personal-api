// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
var profile = require('./models/profile.js');
var musice = require('./models/music.js');

var profile = {
  firstName: "Chiyuki",
  lastName: "Kitagawa",
  github_link: "https://github.com/chytgw",
  twitter_link: "https://twitter.com/chyktgw_in_sf",
  current_city: "San Francisco, CA",
};

var music = [
    {
      _id: 1,
      artist: 'Perfume',
      genre: 'techno-pop',
      origin: 'Japan',
      img: 'Perfume.jpg'
    },
    {
      _id: 2,
      artist: 'ONE OK ROCK',
      genre: 'Alternative Rock',
      origin: 'Japan',
      img: 'OneOkRock.jpg'
    },
    {
      _id: 3,
      artist: 'OK Go',
      genre: 'Alternative Rock',
      origin: 'Chicago, IL',
      img: 'OkGo.jpg'
    },
    {
      _id: 4,
      artist: 'Daft Punk',
      genre: 'House-Electric',
      origin: 'Paris, France',
      img: 'DaftPunk.jpg'
    }
  ];



// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
