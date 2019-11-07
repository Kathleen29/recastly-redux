import Redux from 'redux';

var currentVideoReducer = (state = null, action) => { //you can add a default value to the 'state' and assign it with 'null
  //DONE: define a reducer for the currentVideo field of our state. What this does is that based on an 'action' and the current state, it will return a new state or the current state.
  //! 02:00 Reducers create new states or return existing state for a particular entity
  // if(action.type === 'CHANGE_VIDEO') {
    console.log('yes!');
    switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video || null; //! this is the NEW state. If action.video does not contain a video, instead of returning 'undefined', it will return null.
    default:
      return state;
    }
  }
  // if(!state) {
  //   state.default = null;
  // }
// }
export default currentVideoReducer;

