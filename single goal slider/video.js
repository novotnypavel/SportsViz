// 2. This code loads the IFrame Player API code asynchronously.
//var tag = document.createElement('script');
//tag.src = "https://www.youtube.com/iframe_api";
//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var done = 0;
var tmp;
function setup() {
  //createCanvas(400, 400);
  //player.loadVideoById("n2MtEsrcTTs", 9, 18)
  //tag.parent="#main";
  tmp = select("#tag");
  tmp.style("background-color:black;");
  tmp.size(800,450);
  //tmp.hide();
  player.loadVideoById({'videoId': 'n2MtEsrcTTs',
               'startSeconds': 9,
               'endSeconds': 13,
               'suggestedQuality': 'large'});
}
function draw() {
}
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '300',
    width: '440',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
 // if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(rewindVideo, 4300);
    //done = true;
  //if (event.data == 0 && done == 0 ) {
   // print(done);
   // player.loadVideoById({'videoId': 'SYUgGs9IStY',
              // 'startSeconds': 3,
              // 'endSeconds': 12,
              // 'suggestedQuality': 'large'});
    //done = 1;
  //}
  //else if (event.data == 0 && done == 1 ) {
   // print(done);
   // player.loadVideoById({'videoId': '0rtw9uCevMg',
            //   'startSeconds': 82,
            //   'endSeconds': 95,
            //   'suggestedQuality': 'large'});
    //done = 0;
  //}
}