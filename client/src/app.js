import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './containers/MovieContainer.jsx'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<MovieContainer/>, targetDiv);
});
