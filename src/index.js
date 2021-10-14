import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";


import './scss/app.scss';

import App from './App';
import { Header } from './components';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);
