import React, { Component } from 'react';
import { login } from './userLogin';
import Auth from '../Auth/Auth';

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
      message: '',
      loading: false,
    }
  }

    usernameChange = (e) => {
        this.setState ({
          username: e.target.value,
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

        this.fetchData();

        if(this.state.username.length > 0 && this.state.password.length > 0) {  

          const user = {
            username: this.state.username,
            password: this.state.password
          }

          login(user).then(res => {
            if(Auth.getToken()) {       
              this.props.success();
            }
            else {
              this.setState({
                error: true,
                message: "Invalid username or password."
              })
            }
          })
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
                    <label className="label_text">Username</label>
                    <input
                        className="input_box" 
                        type="text" 
                        name="username"
                        onChange={this.usernameChange}
                        value={this.state.username}  
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
