import React from "react";

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';
import heroImg from '../images/badge-header.svg'

class BadgeNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, // hacer spread de todos los valores que tenia el form antes para que no se pierdan cada vez que se actualiza un prop
        [e.target.name]: e.target.value,
      }
    });
  }

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
                firstname={this.state.form.firstName || "Sebastián"}
                lastname={this.state.form.lastName || "Ramírez"}
                jobtitle={this.state.form.jobTitle || "Frontend Engineer"}
                twitter={this.state.form.twitter ||"elpuutas"}
                email={this.state.form.email}
                avatar="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              {/* levantamiento de estadp */}
              <BadgeForm onChange={ this.handleChange } formValue = {this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;