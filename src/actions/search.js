import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!

  var videos = searchYouTube(YOUTUBE_API_KEY, q);
  {
      setTimeout(function(videos) {
        dispatch ({
          type: 'CHANGE_VIDEO',
          videos: videos
        });
      }, 100);
    };
};

export default handleVideoSearch;
