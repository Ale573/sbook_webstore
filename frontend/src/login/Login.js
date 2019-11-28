import React, { Component } from "react";
import { login } from "./LoginActions";
import Auth from "../auth/Auth";
import Input from "../app/common/Input/Input";
import Button from "../app/common/Button/Button";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error_message: {}
    };
  }

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      const user = {
        username: this.state.username,
        password: this.state.password
      };

      login(user).then(res => {
        if (res.status === 200) {
          Auth.authenticateUser(res.data);
          this.props.success();
        } else {
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
        <form className="form-container" onSubmit={this.onSubmit}>
          <Input
            type={"text"}
            title={"Username"}
            name={"username"}
            value={this.state.username}
            placeholder={"Enter your username"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.username}</p>

          <Input
            type={"password"}
            title={"Password"}
            name={"password"}
            value={this.state.password}
            placeholder={"Enter your password"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.password}</p>

          <p className="error-message">{this.state.error_message.invalid}</p>

          <Button title={"Login"} type={"button"} className={"button"} action={this.onSubmit}></Button>
        </form>
    );
  }
}

export default Login;
