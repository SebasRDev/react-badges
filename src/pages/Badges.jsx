import React from 'react'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import logo from '../images/badge-header.svg'
import './styles/Badges.css';
import { Link } from 'react-router-dom';
import api from '../api'


class Badges extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async() => {
    this.setState({loading: true, error: null});

    try {
      const data = await api.badges.list();
      this.setState({loading: false, data: data});
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  }

  render(){
    const {loading, error, data} = this.state

    if(loading === true){
      return <PageLoading />;
    }

    if(error){
      return (
        <PageError error={error} />
      )
    }

    return(
      <>
        <div className="Badges__hero">
          <div className="Badges__container">
            <img 
              src={logo}
              alt="Logo"
              className="Badges_conf-logo"
            />
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            {/* usamos Link en lugar de a para que no se recargue toda la pagina, Link usa to, en lugar de href */}
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={data} />
            </div>
          </div>
        </div>        

      </>

    );
  }
}

export default Badges;