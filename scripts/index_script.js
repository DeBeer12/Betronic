function clock() {

var currentTime = new Date.now();

var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();

var currentTimeString = currentHours + " : " currentMinutes + " : " currentSeconds;

document.getElementById("clock").innnerhtml = currentTimeString;
}

function news(){
  $('news-container').FeedEk({
    FeedUrl: 'http://www.nu.nl/rss/Algemeen'
  })
}
window.onload = clock(); setInterval('updateClock()', 1000)
