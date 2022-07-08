import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css'
import App from './App.js';
import Nav from './NavBar.js';
import Home from './Home.js';

ReactDOM.render(<><Nav/></>, document.getElementById('NAV'));
ReactDOM.render(<><Home/></>, document.getElementById('root'));


