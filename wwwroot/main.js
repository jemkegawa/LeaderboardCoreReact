import React from 'react';
import ReactDOM from 'react-dom';
import App from './source/app.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './source/styles/app.css';

ReactDOM.render(
   <App />,
   document.getElementById('root')
);

module.hot.accept();
