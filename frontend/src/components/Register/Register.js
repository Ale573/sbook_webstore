import React, { Component } from "react";
import { register } from "./userRegister";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirm_password: "",
      error_message: {},
      loading: false
    };
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  fetchData = () => {
    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  };

  onSubmit = e => {
    this.fetchData();

    if (this.validateForm()) {
      const newUser = {
        username: this.state.username,
        password: this.state.password
      };

      register(newUser).then(res => {
        this.props.success();
      });
    }
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!(this.state.username.length > 0)) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (!(this.state.password.length > 0)) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (this.state.password.length > 0 && this.state.password.length < 8) {
      formIsValid = false;
      errors["password"] = "*Password must have at least 8 characters.";
    }

    if (!(this.state.confirm_password.length > 0)) {
      formIsValid = false;
      errors["confirm_password"] = "*Please enter your password.";
    }

    if (
      this.state.password.length > 0 &&
      this.state.confirm_password.length > 0 &&
      this.state.password !== this.state.confirm_password
    ) {
      formIsValid = false;
      errors["confirm_password"] = "*Passwords are not equal.";
    }

    this.setState({
      error_message: errors
    });

    return formIsValid;
  };

  render() {
    return (
      <div className="form_container">
        <form>
          <label className="label_text">Username</label>
          <input
            className="input_box"
            type="text"
            name="username"
            onChange={this.handleChange('username')}
            value={this.state.username}
          />
          <p className="error_message">{this.state.error_message.username}</p>

          <label className="label_text">Password</label>
          <input
            className="input_box"
            type="password"
            name="password"
            onChange={this.handleChange('password')}
            value={this.state.password}
          />
          <p className="error_message">{this.state.error_message.password}</p>

          <label className="label_text">Confirm Password</label>
          <input
            className="input_box"
            type="password"
            name="confirm_password"
            onChange={this.handleChange('confirm_password')}
            value={this.state.confirm_password}
          />
          <p className="error_message">
            {this.state.error_message.confirm_password}
          </p>

          {this.state.loading ? (
            <button className="submit_button" type="button">
              Loading
            </button>
          ) : (
            <button
              className="submit_button"
              type="button"
              onClick={this.onSubmit}
            >
              Register
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Register;
