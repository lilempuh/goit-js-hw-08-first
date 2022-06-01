import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
let localKey =  "videoplayer-current-time"

player.on('play', onPlay);

function onPlay() {player.on("timeupdate", _.throttle(saveTimeToStop, 1000));};

function saveTimeToStop(event) {
    console.log(event.seconds);
    localStorage.setItem(localKey, event.seconds);
} 

function getCurrentTime() {
    const currentTime = localStorage.getItem(localKey);
    if (currentTime)
    player.setCurrentTime(currentTime);
};
getCurrentTime();