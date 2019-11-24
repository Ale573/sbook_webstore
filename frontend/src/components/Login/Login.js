import React, { Component } from "react";
import { login } from "./userLogin";
import Auth from "../Auth/Auth";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error_message: {}
    };
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  onSubmit = e => {
    if (this.validateForm()) {
      const user = {
        username: this.state.username,
        password: this.state.password
      };

      login(user).then(res => {
        if(res.status === 200) {
          Auth.authenticateUser(res.data);
          this.props.success();
        }
        else {
          let errors = {
            invalid: res.data["msg"]
          };
          this.setState({
            error_message: errors
          });
        }
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
            onChange={this.handleChange("username")}
            value={this.state.username}
          />
          <p className="error_message">{this.state.error_message.username}</p>

          <label className="label_text">Password</label>
          <input
            className="input_box"
            type="password"
            name="password"
            onChange={this.handleChange("password")}
            value={this.state.password}
          />
          <p className="error_message">{this.state.error_message.password}</p>

          <p className="error_message">{this.state.error_message.invalid}</p>

          <button
            className="submit_button"
            type="button"
            onClick={this.onSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
