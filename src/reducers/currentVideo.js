import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if(action.type === 'CHANGE_VIDEO') {
    console.log('yes!');
  }
  if(!state) {
    state.default = null;
  }
}
export default currentVideoReducer;

