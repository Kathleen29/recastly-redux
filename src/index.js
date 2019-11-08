import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import Store from './store/store.js' //added to allow Store to be used throughout the entire app
import { Provider } from 'react-redux'; //added to force Store to be available throughout the entire app

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to the rest of your app.
//! Read the article about Provider
// Provider(Store)

ReactDOM.render(
  <Provider store={Store}>
  <App /*API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} *//>
  </Provider>,
  document.getElementById('app')

);
