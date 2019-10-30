import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { updateProfileFunction } from './updateFunction';

export class updateProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            address: '',
            billing_address: '',
            phone: '',
            error: false,
            message: '',
        }
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    emailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    addressChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    billingAddressChange = (e) => {
        this.setState({
            billing_address: e.target.value
        })
    }


    phoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    onSubmit = (e) => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.address.length > 0 && this.state.billing_address.length > 0
            && this.state.phone.length > 0) {
                
                const profile = {
                    userId: decoded.identity.id,
                    name: this.state.name,
                    email: this.state.email,
                    address: this.state.address,
                    billing_address: this.state.billing_address,
                    phone: this.state.phone
                }
        
                updateProfileFunction(profile).then(res => {
                    //TODO
                })
        }

        else {
            this.setState({
                error: true,
                message: "All fields are needed."
            })
        }
    }

    render() {
        return (
            <div className="selling_book">
                <h1 className="header_title">Update your profile!</h1>

                <form>

                    <label className="label_text">Name</label>
                    <input
                        className="input_box"
                        type="text"
                        name="name"
                        onChange={this.nameChange}
                        value={this.state.name}
                    />

                    <label className="label_text">Email</label>
                    <input
                        className="input_box"
                        type="email"
                        name="email"
                        onChange={this.emailChange}
                        value={this.state.email}
                    />

                    <label className="label_text">Address</label>
                    <input
                        className="input_box"
                        type="text"
                        name="address"
                        onChange={this.addressChange}
                        value={this.state.address}
                    />

                    <label className="label_text">Billing Address</label>
                    <input
                        className="input_box"
                        type="text"
                        name="billing_address"
                        onChange={this.billingAddressChange}
                        value={this.state.billing_address}
                    />

                    <label className="label_text">Phone Number</label>
                    <input
                        className="input_box"
                        type="text"
                        name="phone"
                        onChange={this.phoneChange}
                        value={this.state.phone}
                    />

                    <button
                        className="submit_button"
                        type="button"
                        onClick={this.onSubmit}>
                        Update
                    </button>
                    
                    <p className={this.state.error ? "error_message_active" : "error_message"}>{this.state.message}</p>
                </form>
            </div>
        )
    }
}

export default updateProfile;
