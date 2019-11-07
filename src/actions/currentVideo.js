var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  //should return an object with a "type" key equal to "CHANGE_VIDEO"
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;
