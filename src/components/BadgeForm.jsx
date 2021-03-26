import React from 'react';


class BadgeForm extends React.Component{
  //inicializar estado para evitar errores de querer leer un null
  state = {};

  handleClick = (e) => {

    console.log("boton was clicked");
  };

  render(){
    const { onChange, formValue, error } = this.props;
    
    return(
      <>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={onChange} 
              className="form-control" 
              type="text" 
              name="firstName"
              value={formValue.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input 
              onChange={onChange} 
              className="form-control" 
              type="text" 
              name="lastName"
              value={formValue.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={onChange} 
              className="form-control" 
              type="email"
              name="email"
              value={formValue.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={onChange} 
              className="form-control" 
              type="text" 
              name="jobTitle"
              value={formValue.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={onChange} 
              className="form-control" 
              type="text" 
              name="twitter"
              value={formValue.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>

        {error && <p className="text-danger">{error.message}</p>}
      </>
    );
  }
}

export default BadgeForm;