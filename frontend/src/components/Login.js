import React, { Component } from 'react';

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
      message: '',
      loading: false,
    }
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

      fetchData = () => {
        this.setState({
          loading: true
        })

        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 3000)
      }

      onSubmit = (e) => {

        if(this.state.email.length > 0 && this.state.password.length > 0) {  

          if(this.state.email === this.props.user.test_email && this.state.password === this.props.user.test_password) {
            this.fetchData();
            this.props.success();
          }
          else {
            this.setState({
              error: true,
              message: "Invalid email or password."
            })
          }

        }
        else {
            this.setState({
                error: true,
                message: "All fields are requiered."
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
                        type="password" 
                        name="password"
                        onChange={this.passwordChange}
                        value={this.state.password} 
                    />

                    <p className={this.state.error ? "error_message_active":"error_message"}>{this.state.message}</p>

                    {this.state.loading ? 
                      <button
                        className="submit_button"
                        type="button"
                        onClick={this.onSubmit}> 
                        Loading
                      </button>
                    :
                      <button
                        className="submit_button"
                        type="button"
                        onClick={this.onSubmit}>
                          Login
                      </button>
                    }
                </form>
            </div>
        )
    }
}

export default Login;
