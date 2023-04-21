import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframeRef);
const TIME_STORAGE_KEY = 'videoplayer-current-time';

iframePlayer.on('timeupdate', throttle(timeSet, 1000));

function timeSet({ seconds }) {
  localStorage.setItem(TIME_STORAGE_KEY, seconds);
}

iframePlayer.setCurrentTime(localStorage.getItem(TIME_STORAGE_KEY) || 0);
