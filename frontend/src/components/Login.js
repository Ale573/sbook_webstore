import React, { Component } from 'react';

export class Login extends Component {

    state = {
        email: '',
        password: '',
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

      onSubmit = (e) => {
        if(this.state.email.length > 0 && this.state.password.length > 0) {  
            
            //TODO - Axios Connection
        }
        else {
            this.setState({
                error: true,
                message: "Invalid username or password."
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
                        type="email" 
                        name="email"
                        onChange={this.emailChange}
                        value={this.state.email}  
                    />

                    <label className="label_text">Password</label>
                    <input
                        className="input_box" 
                        type="text" 
                        name="password"
                        onChange={this.passwordChange}
                        value={this.state.password} 
                    />

                    <p className={this.state.error ? "error_message_active":"error_message"}>{this.state.message}</p>

                    <button
                        className="submit_button" 
                        type="button"
                        onClick={this.onSubmit}>
                            Login
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;
