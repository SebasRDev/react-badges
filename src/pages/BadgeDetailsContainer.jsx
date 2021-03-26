import React from 'react';
import api from '../api';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';
import BadgeDatails from './BadgeDetails';


class BadgeDetailsContainer extends React.Component{
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({loading: true, error: null});

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({loading: false, data: data});
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  }

  handleCloseModal = e => {
    this.setState({modalIsOpen:false});
  }

  handleOpenModal = e => {
    this.setState({modalIsOpen:true});
  }

  handleDeleteBadge = async (e) => {
    this.setState({loading: true, error: null});
    
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({loading: false});
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  }

  render(){
    const {data, loading, error, modalIsOpen} = this.state;

    if(loading === true){
      return(
        <PageLoading />
      )
    }

    if(error){
      return(
        <PageError error={error} />
      )
    }

    return(
      <BadgeDatails
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={modalIsOpen}
        data={data}
      />
    )
  }
}

export default BadgeDetailsContainer;