import React from 'react'

import './styles/BadgesList.css'

class BadgesList extends React.Component{
  render(){
    const {badges} = this.props;

    return(
      <ul 
        className="list-unstyled"
      >
        {badges.map((badge) => {
          return (
            <li
              className="BadgesListItem"
              key={badge.id}
            >
              <img 
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt="Avatar"
              />
              <div className="badge__info">
                <p className="badge__info-name font-weight-bold">{badge.firstName} {badge.lastName}</p>
                <p className="badge__info-twitter">@{badge.twitter}</p>
                <p className="badge__info-jobtitle">{badge.jobTitle}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList