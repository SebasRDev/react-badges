import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badges from './pages/Badges';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

ReactDOM.render(
  <Badges/>, 
  container
  ); //render(que, dónde)

