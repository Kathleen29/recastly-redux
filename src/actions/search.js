import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
};
  //TODO:  Write an asynchronous action to handle a video search!
  // searchYouTube(options).dispatch(type, videos)`
  var videos = searchYouTube(options, function(){console.log(items)});
  console.log(videos);


       return ({
          type: 'CHANGE_VIDEO',
          videos: videos
        });






        // return  changeVideo(videos)


        // var changeVideo = (video) => ({

        //   type: 'CHANGE_VIDEO',
        //   video: video

        //   //have the changeVideo action to change store.state
        // });


};




export default handleVideoSearch;
