function clock() {

var currentTime = new Date.now();

var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();

var currentTimeString = currentHours + " : " currentMinutes + " : " currentSeconds;

document.getElementById("clock").innnerhtml = "KAK";
}
//
// function news(){
//   $('news-container').FeedEk({
//     FeedUrl: 'http://www.nu.nl/rss/Algemeen'
//   })
// }

$('#divRSS').FeedEk({
  FeedUrl:'https://www.ad.nl/home/rss.xml'
})



window.onload = clock(); setInterval('updateClock()', 1000)
