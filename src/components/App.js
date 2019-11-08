import { connect } from 'react-redux'; //! added; doesn't break the specRunner or the Recast.ly
import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData';

import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';


  var App = /*extends React.Component*/() => (
      // constructor(props) {
      //   super(props);

      //   this.state = {
      //     videos: exampleVideoData,
      //     currentVideo: exampleVideoData[0]
      //   };

      //   this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
      // }

//   componentDidMount() {
//     this.getYouTubeVideos('cute kittens');
//   }

//   handleVideoListEntryTitleClick(video) {
//     this.setState({currentVideo: video});
//   }

//   getYouTubeVideos(query) {
//     var options = {
//       key: this.props.API_KEY,
//       query: query
//     };

//     this.props.searchYouTube(options, (videos) =>
//       this.setState({
//         videos: videos,
//         currentVideo: videos[0]
//       })
//     );
//   }
//   }
//   //TODO: swap out the React components below for the container components
//   //  you wrote in the 'containers' directory.
//   render() {
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 col-md-offset-3">
//             <Search getYouTubeVideos={this.getYouTubeVideos}/>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <VideoPlayer video={this.state.currentVideo}/>
//           </div>
//           <div className="col-md-5">
//             <VideoList
//               handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
//               videos={this.state.videos}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// })
  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer />
      </div>
      <div className="col-md-5">
        <VideoList />
      </div>
    </div>
  </div>
)

export default App;