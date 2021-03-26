import React from 'react';
import { Link } from 'react-router-dom';
import Astronauts from '../images/astronauts_home.svg';
import homeLogo from '../images/platziconf-logo.svg';
import './styles/Home.css';

class Home extends React.Component{
  render(){
    return (
      <div className="home__container">
        <div className="row">
          <div className="col">
            <div className="home__copy">
              <img 
                src={homeLogo}
                alt="Logo"
              />
              <h2 className="home__copy-title">Print your badges</h2>
              <p className="home__Copy-desc">The easiest way to manage your conference</p>
              <Link 
                to="/badges"
                className="btn btn-primary"
              >
                Start now
              </Link>
            </div>
          </div>
          <div className="col">
            <img 
              src={Astronauts}
              alt="Astronautas"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;