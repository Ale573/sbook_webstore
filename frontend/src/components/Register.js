import React, { Component } from 'react';

export class Register extends Component {

    state = {
        email: '',
        password: '',
        confirm_password: '',
        error: false,
        message: ''
    }

    emailChange = (e) => {
        this.setState ({
          email: e.target.value,
        })
      }
    
      passwordChange = (e) => {
        this.setState ({
          password: e.target.value,
        })
      }

      confirmPasswordChange = (e) => {
        this.setState ({
          confirm_password: e.target.value,
        })
      }

      onSubmit = (e) => {

        if(this.state.password.length >= 8) {
            if(this.state.password === this.state.confirm_password) { 
      
              const newUser = {
                email: this.state.email,
                password: this.state.password
              }


            }
            else {
              this.setState({
                error: true,
                message: "Passwords are not equal."
              })
            }
          }
        else {
            this.setState({
                error: true,
                message: "Password must have at least 8 characters."
            })
        }
      }

    render() {
        return (
            <div className="form_container">
                <form> 
                    <label className="label_text">Email</label>
                    <input 
                        className="input_box"
                        type="text" 
                        name="email"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="off"
                        onChange={this.emailChange}
                        value={this.state.email} 
                    />

                    <label className="label_text">Password</label>
                    <input
                        className="input_box"
                        type="password" 
                        name="password"
                        onChange={this.passwordChange}
                        value={this.state.password}  
                    />

                    <label className="label_text">Confirm Password</label>
                    <input
                        className="input_box"
                        type="password" 
                        name="confirm_password"
                        onChange={this.confirmPasswordChange}
                        value={this.state.confirm_password} 
                    />

                    <p className={this.state.error ? "error_message_active":"error_message"}>{this.state.message}</p>

                    <button
                        className="submit_button" 
                        type="button"
                        onClick={this.onSubmit}>
                            Register
                    </button>
                </form>
            </div>
        )
    }
}

export default Register;
