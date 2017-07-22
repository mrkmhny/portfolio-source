import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('mount')
  );
});
