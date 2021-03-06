import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// DONE:  Create your redux store, apply thunk as a middleware, and export it!
const Store = createStore(rootReducer, {currentVideo: null, videoList: []}, applyMiddleware(thunk))

export default Store

