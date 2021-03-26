import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';

function useIncreaseCount(max){
  const [count, setCount] = React.useState(0);

  if(count > max){
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDatails(props){
  const [count, setCount] = useIncreaseCount(4);

  const data = props.data
  return(
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="logo conferencia"/>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{data.firstName} {data.lastName}</h1>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge 
              firstname={data.firstName || "Nombre"}
              lastname={data.lastName || "Apellido"}
              jobtitle={data.jobTitle || "titulo de trabajo"}
              twitter={data.twitter ||"arroba"}
              email={data.email}
              avatar={data.avatarUrl}
            />
          </div>
          <div className="col BadgeDetails__buttons">
            <button onClick={() => {
              setCount(count + 1);
            }} className="btn btn-primary mr-4">
              increase count {count}
            </button>

            <Link className="btn btn-primary mr-4" to={`/badges/${data.id}/edit`}>
              Editar
            </Link>
            <button onClick={props.onOpenModal} className="btn btn-danger">
              Delete
            </button>
            <DeleteBadgeModal
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeDatails;