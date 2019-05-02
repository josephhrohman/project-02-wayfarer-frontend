import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './Home';

// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));

