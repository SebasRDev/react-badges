import React from "react";

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeEdit.css';
import heroImg from '../images/platziconf-logo.svg'
import api from '../api';
import md5 from 'md5';
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    } 
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, // hacer spread de todos los valores que tenia el form antes para que no se pierdan cada vez que se actualiza un prop
        [e.target.name]: e.target.value,
      }
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error: null});

    try {
      this.state.form.avatarUrl = this.getGravatar(this.state.form.email);
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  }

  getGravatar = (email) => {
    const hash = md5(email);
    const gravatarLink = `https://www.gravatar.com/avatar/${hash}?d=identicon`

    return gravatarLink;
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({loading: true, error: null});

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      this.setState({loading: false, form: data});
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render(){
    const {loading, error, form} = this.state;

    if(loading){
      return <PageLoading />
    }

    return(
      <>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={heroImg} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstname={form.firstName || "Sebastián"}
                lastname={form.lastName || "Ramírez"}
                jobtitle={form.jobTitle || "Frontend Engineer"}
                twitter={form.twitter ||"elpuutas"}
                email={form.email}
                avatar="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <h2>Edit Attendant</h2>
              {/* levantamiento de estadp */}
              <BadgeForm onSubmit={this.handleSubmit} onChange={ this.handleChange } formValue = {form} error={error}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeEdit;