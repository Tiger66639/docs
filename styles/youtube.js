var Lscreen=window.innerWidth;
var largeur=Lscreen-17;

$("#player").attr("width", largeur);
$("#player").attr("height", largeur*.78);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) 
{
    event.target.playVideo();
    player.mute();
}

function onPlayerStateChange(event) {
if (event.data == 0) 
    {
        event.target.playVideo();
    }
}


window.onresize = function(event) 
{
    Lscreen=window.innerWidth;
    largeur=Lscreen-17; // add this line
    //alert(Lscreen);
    $("#player").attr("width", largeur);
    $("#player").attr("height", largeur*.78);
}