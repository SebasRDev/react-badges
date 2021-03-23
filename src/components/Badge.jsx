import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {

  
  render(){
    //PROPS: Argumentos a una funcion. en este caso atributos a nuestro componente
    const {firstname, lastname, avatar, jobtitle, twitter} = this.props;
    
    return(
      <div className="badge">
        <div className="badge_header">
          <img src={ confLogo } alt="Logo conferencia"/>
        </div>

        <div className="badge_section-name">
          <img className="badge_avatar" src={avatar} alt="Avatar"/>
          <h1>{firstname} <br/> {lastname}</h1>
        </div>

        <div className="badge_section-info">
          <h3>{jobtitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="badge_footer">#platziconf</div>
      </div>
    )
  }
}

export default Badge;