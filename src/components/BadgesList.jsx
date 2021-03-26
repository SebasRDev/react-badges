import React from 'react'
import { Link } from 'react-router-dom';

import './styles/BadgesList.css'

function useSearchBadges(badges){
  const [query, setQuery] = React.useState('');
  const [filterBadges, setFilterBadges] = React.useState(badges);

  React.useMemo(
    () => {
      const result = badges.filter(badge =>{
        return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
      });

      setFilterBadges(result);
    },
    [badges, query]
  );

  return {query, setQuery, filterBadges};
}

function BadgesList (props){
  const {badges} = props;

  const {query, setQuery, filterBadges} = useSearchBadges(badges);

  const recentBadges = [...filterBadges].reverse();

  if(filterBadges.length === 0){
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input 
            className="form-control"
            type="text"
            id="searchBadges"
            value={query}
            onChange={
              (e) => {
                setQuery(e.target.value);
              }
            }
          />
        </div>
        <h3>No badges where found</h3>
        <Link
          className="btn btn-primary"
          to="/badges/new"
        >
          Create new Badge
        </Link>
      </div>
    )
  }

  return(
    <>
      <div className="form-group">
        <label>Filter Badges</label>
        <input 
          className="form-control"
          type="text"
          id="searchBadges"
          value={query}
          onChange={
            (e) => {
              setQuery(e.target.value);
            }
          }
        />
      </div>
      <ul className="list-unstyled">
        {recentBadges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <Link className="text-reset text-decoration-none BadgesListItem-link" to={`badges/${badge.id}`}>
                <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar"/>
                <div className="badge__info">
                  <p className="badge__info-name font-weight-bold">{badge.firstName} {badge.lastName}</p>
                  <p className="badge__info-twitter">@{badge.twitter}</p>
                  <p className="badge__info-jobtitle">{badge.jobTitle}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BadgesList