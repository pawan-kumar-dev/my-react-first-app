import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="Firstname" />
        <br />
        <input type="text" placeholder="Lastname" />
        <br />
        <input type="email" placeholder="Email" />
        <br></br>
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
