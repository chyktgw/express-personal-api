console.log("Sanity Check: JS is working!");
var template;
var template1;

var profile = [];
var $profile;

var music = [];
var $music;

$(document).ready(function(){

$profile = $('#profile');
var source = $('#profile').html();
template = Handlebars.compile(source);


$music = $('#music');
var sourceMusic = $('#music').html();
template1 = Handlebars.compile(sourceMusic);

    $.ajax({
      method: 'GET',
      url: '/api/profile',
      success: onSuccess,
      error: onError
    });


    $.ajax({
      method: 'GET',
      url: '/api/music',
      success: musicSuccess,
      error: musicError
    });


    // $('#newMusic').on('submit', function(e) {
    // e.preventDefault();
    // $.ajax({
    //   method: 'POST',
    //   url: '/api/music',
    //   data: $(this).serialize(),
    //   success: newMusicSuccess,
    //   error: newMusicError
    //   });
    // });


    // $musicList.on('click', '.deleteBtn', function() {
    //   console.log('clicked delete button to', '/api/music/'+$(this).attr('data-id'));
    //   $.ajax({
    //     method: 'DELETE',
    //     url: '/api/music/'+$(this).attr('data-id'),
    //     success: deleteMusicSuccess,
    //     error: deleteMusicError
    //   });
    // });



//rendering
function render() {
  $profile.empty();
  var profileHtml = template({ profile: profile });
  $profile.append(profileHtml);
}

function onSuccess(json) {
  profile = json;
  render();
}
function onError(e){
  console.log('profile error');
}

function renderMusic() {
  $("#music").empty();
  var musicHtml = template1({ music: allMusic });
  $('#music').append(musicHtml);
  console.log(allMusic);
}

function musicSuccess(json) {
allMusic = json;
renderMusic();
}
function musicError(e) {
console.log('error!!');
$('#musicTarget');
}


// function newMusicSuccess(json) {
// $('#newMusicForm input').val('');
// allMusic.push(json);
// render();
// }
//
// function newMusicError() {
// console.log('newMusic error!');
// }
//
// function deleteMusicSuccess(json) {
// var music = json;
// console.log(json);
// var musicId = music._id;
// console.log('delete music', musicId);
// for(var i = 0; i < allMusic.length; i++) {
//   if(allMusic[i]._id === musicId) {
//     allMusic.splice(i, 1);
//     break;
//   }
// }
// render();
// }
// function deleteMusicError() {
// // console.log('deleteMusic error!');
// }
// });
});
