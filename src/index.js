import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
//imported fonts
import 'typeface-lobster';
import 'typeface-open-sans';
//imported icons
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
//made sure this bottom one is below
import App from './App';
//is App the class inside this folder?
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
