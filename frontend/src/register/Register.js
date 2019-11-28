import React, { Component } from "react";
import Input from "../app/common/Input/Input";
import Button from "../app/common/Button/Button";
import { register } from "./RegisterActions";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirm_password: "",
      error_message: {}
    };
  }

  handleFormChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      const newUser = {
        username: this.state.username,
        password: this.state.password
      };

      register(newUser).then(res => {
        if(res.status === 200) {
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

          <Input
            type={"password"}
            title={"Confirm Password"}
            name={"confirm_password"}
            value={this.state.confirm_password}
            placeholder={"Enter your password"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.confirm_password}</p>

          <p className="error-message">{this.state.error_message.invalid}</p>

          <Button title={"Register"} type={"button"} className={"button"} action={this.onSubmit}></Button>
        </form>
    );
  }
}

export default Register;
