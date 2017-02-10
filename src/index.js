import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './SplashPage';
import Places from './Places';

import Routes from './routes';
import { browserHistory } from 'react-router';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);