import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      gender: "",
      play: false,
      sing: false,
      reading: false,
      state: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          name="firstName"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Lastname"
          name="lastName"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => this.handleChange(e)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => this.handleChange(e)}
        />
        <textarea
          name="address"
          onChange={(e) => this.handleChange(e)}
        ></textarea>
        <br />
        <div>
          Gender:
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={(e) => this.handleChange(e)}
            checked={this.state.gender === "Male"}
          />
          : Male
          <br />
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => this.handleChange(e)}
            checked={this.state.gender === "Female"}
          />
          : Female
          <br />
        </div>
        Hobbies : <br />
        Play:
        <input
          type="checkbox"
          name="play"
          onChange={(e) => this.handleChange(e)}
          checked={this.state.play}
        />
        Sing:
        <input
          type="checkbox"
          name="sing"
          onChange={(e) => this.handleChange(e)}
          checked={this.state.sing}
        />
        Reading:
        <input
          type="checkbox"
          name="reading"
          onChange={(e) => this.handleChange(e)}
          checked={this.state.reading}
        />
        <br />
        Select State:
        <select
          value={this.state.state}
          name="state"
          onChange={(e) => this.handleChange(e)}
        >
          <option>Select STate</option>
          <option value="MH">Maharashtra</option>
          <option value="GOA">Goa</option>
          <option value="U.P.">UP</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
