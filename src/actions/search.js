import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// var Search = ({handleSearch}) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" onChange={(e) => handleSearch(e.target.value)}/>
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

var handleVideoSearch = (q) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
};
  //TODO:  Write an asynchronous action to handle a video search!
  // console.log('hello')
  // searchYouTube(options).dispatch(type, videos)`
  return (dispatch) => {searchYouTube(options, (videos) => dispatch(changeVideoList(videos)))};
  console.log(videos);

  // console.log(searchYouTube)
  return (dispatch) => {

    dispatch(changeVideoList(videos),
    // changeVideo(videos[0])

    );
    //dispatch(changeVideo(videos[0]))

  }

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
