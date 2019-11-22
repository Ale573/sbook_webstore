import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { updateProfileFunction } from "./updateFunction";

export class updateProfile extends Component {
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

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  onSubmit = e => {
    if (this.validateForm()) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);

      const profile = {
        userId: decoded.identity.id,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        billing_address: this.state.billing_address,
        phone: this.state.phone
      };

      updateProfileFunction(profile).then(res => {
        this.props.history.push("/dash");
      });
    } else {
      this.setState({
        error: true,
        message: "All fields are needed."
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
      <div className="update_profile">
        <h1 className="header_title">Update your profile!</h1>

        <form className="profile_form">
          <label className="label_text">Name</label>
          <input
            className="input_box"
            type="text"
            name="name"
            onChange={this.handleChange("name")}
            value={this.state.name}
          />
          <p className="error_message">{this.state.error_message.name}</p>

          <label className="label_text">Email</label>
          <input
            className="input_box"
            type="email"
            name="email"
            onChange={this.handleChange("email")}
            value={this.state.email}
          />
          <p className="error_message">{this.state.error_message.email}</p>

          <label className="label_text">Address</label>
          <input
            className="input_box"
            type="text"
            name="address"
            onChange={this.handleChange("address")}
            value={this.state.address}
          />
          <p className="error_message">{this.state.error_message.address}</p>

          <label className="label_text">Billing Address</label>
          <input
            className="input_box"
            type="text"
            name="billing_address"
            onChange={this.handleChange("billing_address")}
            value={this.state.billing_address}
          />
          <p className="error_message">
            {this.state.error_message.billing_address}
          </p>

          <label className="label_text">Phone Number</label>
          <input
            className="input_box"
            type="text"
            name="phone"
            onChange={this.handleChange("phone")}
            value={this.state.phone}
          />
          <p className="error_message">{this.state.error_message.phone}</p>

          <button
            className="submit_button"
            type="button"
            onClick={this.onSubmit}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default updateProfile;
