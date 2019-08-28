import React from "react";

/* 
  1. Setup UserForm to accept props
  2. Display the proper values from props where needed
*/
const UserForm = (props) => (
  <p>
    <label htmlFor="PROPS_ID">PROPS_LABEL {props.label}</label>:
    <input id="PROPS_ID" type="text" onChange="PROPS_ONCHANGE" />
  </p>
);

class Practice3 extends React.Component {
  state = {
    first: "First",
    last: "Last"
  };

  handleFirst = e => {
    this.setState({ first: e.target.value });
  };

  /* 
    3. Create a handler function called handleLast    
    4. Have the function update last in state to e.target.value
  */

  handleLast = (e) => {
    this.setState({last: e.target.value})
  }

  render() {
    return (
      <>
        <h2>
          {this.state.first} {this.state.last}
        </h2>
        {/*
          3. Call <UserForm /> and pass in the following prop values
              id = "firstName"
              label = "First Name"
              onChange = handleFirst
          4. Call <UserForm /> again and pass in the following prop values
              id = "lastName"
              label = "Last Name"
              onChange = handleLast              
        */}
        <UserForm id="firstName" label="First Name" onChange={this.handleFirst} />
        <UserForm id="lastName" label="Last Name" onChange={this.handleLast} />
      </>
    );
  }
}

export default Practice3;
