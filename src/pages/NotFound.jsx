import React from 'react';
import './styles/NotFound.css';
import notFoundImage from '../images/astronaut.svg'
import { Link } from 'react-router-dom';

function NotFound(){
  return (
    <div className="notfound__content">
      <div className="row">
        <div className="col">
          <img 
            className="notFound__img"
            src={notFoundImage}
            alt="not found"
          />
        </div>
        <div className="col notfound__copy">
          <p className="notfound__copy-text">Lo sentimos, la página que buscas no ha sido encontrada</p>
          <Link
            to="/"
            className="btn btn-primary"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;