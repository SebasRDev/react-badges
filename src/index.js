import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstname="Sebastián"
    lastname="Ramírez" 
    avatar="https://www.gravatar.com/avatar?d=identicon"
    jobtitle="Frontend Engineer" 
    twitter="elpuutas"
  />, 
  container); //render(que, dónde)

