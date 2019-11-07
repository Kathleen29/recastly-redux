var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  //! Note: every ACTION requires two arguments a 'type' (this is REQUIRED for every avtion) and the value is a string (it can be anything to describe this payload data). 'Payload key' and the value you are passing, which is the argument; here it is 'video'.
  //should return an object with a "type" key equal to "CHANGE_VIDEO"
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;
