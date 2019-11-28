import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Input from "../app/common/Input/Input";
import Button from "../app/common/Button/Button";
import { updateProfile } from "./UserActions";

export class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",
      billing_address: "",
      phone: "",
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
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      const user_id = decoded.identity.id;

      const profile = {
        userId: user_id,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        billing_address: this.state.billing_address,
        phone: this.state.phone
      };

      updateProfile(profile).then(res => {
        if(res.status === 200) {
          this.props.history.push("/profile");
        }
      });
    }
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!(this.state.name.length > 0)) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (!(this.state.email.length > 0)) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (!(this.state.address.length > 0)) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (!(this.state.billing_address.length > 0)) {
      formIsValid = false;
      errors["billing_address"] = "*Please enter your billing address.";
    }

    if (!(this.state.phone.length > 0)) {
      formIsValid = false;
      errors["phone"] = "*Please enter your phone number.";
    }

    this.setState({
      error_message: errors
    });

    return formIsValid;
  };

  render() {
    return (
      <div className="update-profile">
        <h1 className="header-title">Update your profile!</h1>

        <form className="form-container" onSubmit={this.onSubmit}>
          <Input
            type={"text"}
            title={"Name"}
            name={"name"}
            value={this.state.name}
            placeholder={"Enter your name"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.name}</p>

          <Input
            type={"email"}
            title={"Email"}
            name={"email"}
            value={this.state.email}
            placeholder={"Enter your email"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.email}</p>

          <Input
            type={"text"}
            title={"Address"}
            name={"address"}
            value={this.state.address}
            placeholder={"Enter your address"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.address}</p>

          <Input
            type={"text"}
            title={"Billing Address"}
            name={"billing_address"}
            value={this.state.billing_address}
            placeholder={"Enter your billing address"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.billing_address}</p>

          <Input
            type={"text"}
            title={"Phone"}
            name={"phone"}
            value={this.state.phone}
            placeholder={"Enter your phone number"}
            onChange={this.handleFormChange}
          />
          <p className="error-message">{this.state.error_message.phone}</p>

          <Button title={"Update"} type={"button"} className={"button"} action={this.onSubmit}></Button>
        </form>
      </div>
    );
  }
}

export default UserForm;
