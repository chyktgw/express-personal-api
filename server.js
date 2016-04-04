
// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var db = require('./models');
var profile = require('./models/profile.js');
//var music = require('./models/music.js');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Orgin, X-Requested-With, Content-Type, Accept");
  next();
});



/************
 * DATABASE *
 ************/




var profile = [{
  name: "Chiyuki Kitagawa",
  github_link: "https://github.com/chytgw",
  twitter_link: "https://twitter.com/chyktgw_in_sf",
  current_city: "San Francisco, CA"
}];
//
// var music = [
//     {
//       _id: 1,
//       artist: 'Perfume',
//       genre: 'techno-pop',
//       origin: 'Japan',
//       img: 'Perfume.jpg'
//     },
//     {
//       _id: 2,
//       artist: 'ONE OK ROCK',
//       genre: 'Alternative Rock',
//       origin: 'Japan',
//       img: 'OneOkRock.jpg'
//     },
//     {
//       _id: 3,
//       artist: 'OK Go',
//       genre: 'Alternative Rock',
//       origin: 'Chicago, IL',
//       img: 'OkGo.jpg'
//     },
//     {
//       _id: 4,
//       artist: 'Daft Punk',
//       genre: 'House-Electric',
//       origin: 'Paris, France',
//       img: 'DaftPunk.jpg'
//     }
//   ];

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */



app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal API!",
    documentation_url: "https://github.com/chyktgw/express-personal-api", // CHANGE ME
    base_url: "http://cherry-pudding-72885.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/music", description: "Favorite music"}
    ]
  });
});


 app.get('/api/profile', function (req, res) {
   res.json({
     data: [{
       name: "Chiyuki",
       city: "San Francisco"
     }]
   });
 });
//
// // get all music
// app.get('/api/music', function (req, res) {
//   db.music.find(function(err, music){
//     if (err) {
//       return console.log("Music error", err);
//     }
//     res.json(music);
//   });
// });

// get one artist
// app.get('/api/music/:id', function (req, res) {
//   db.Music.findOne({_id: req.params.id }, function(err, data) {
//     if (err){
//       return console.log("Error", err);
//     }
//     res.json(music);
//   });
// });
//
// // create new music
// app.post('/api/music', function (req, res) {
//   var newMusic = new db.Music({
//     artist: req.body.artist,
//     genre: req.body.genre,
//     origin: req.body.origin
//   });
//   newMusic.save(function(err, music){
//     if (err) {
//       return console.log("save error: " + err);
//     }
//     console.log("saved ", music.title);
//     res.json(musicSaved);
//   });
// });
//
// // delete artist/music
// app.delete('/api/music/:id', function (req, res) {
//   console.log('music delete', req.params);
//   var musicId = req.params.id;
//   db.Music.findOneAndRemove({ _id: musicId },function (err, deletedMusic) {
//     if (err){
//       return console.log("delete error", err);
//     }
//     res.json(musicDeleted);
//   });
// });





/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
