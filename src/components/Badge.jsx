import React from 'react';

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render(){
    return(
      <div>
        <div>
          <img src={ confLogo } alt="Logo conferencia"/>
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>Sebastian <br/> Ramirez</h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@elpuutas</p>
        </div>

        <div>#platziconf</div>
      </div>
    )
  }
}

export default Badge;