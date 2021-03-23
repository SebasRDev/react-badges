import React from "react";

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import '../components/styles/BadgeNew.css';
import heroImg from '../images/badge-header.svg'

class BadgeNew extends React.Component {
  render(){
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={heroImg} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstname="Sebastián"
                lastname="Ramírez"
                jobtitle="Frontend Engineer"
                twitter="elpuutas"
                avatar="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;