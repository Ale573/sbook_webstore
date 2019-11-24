import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Auth from '../../components/Auth/Auth';

export class Home extends Component {
    state = {
        login: true,
        register: false,
    }

    changeLogin = () => {
        this.setState({
            login: true,
            register: false
        })
    }

    changeRegister = () => {
        this.setState({
            login: false,
            register: true
        })
    }

    successfulLogin = () => {
        const token = Auth.getToken();
        const decoded = jwt_decode(token);

        if(decoded.identity.status === "new"){
            this.props.history.push('/updateProfile');
        }
        else {
            this.props.history.push('/dash');
        }
    }

    successfulRegister = () => {
        this.setState({
            login: true,
            register: false
        })
    }

    render() {
        return (
            <div className="home">
                <div className="lr_background"></div>
                <div className="lr_container">
                    <div className="title_container">
                        <h2 id="login" className={this.state.login ? "section_title_active":"section_title"} onClick={this.changeLogin}>Login</h2>
                        <h2 id="register" className={this.state.register ? "section_title_active":"section_title"} onClick={this.changeRegister}>Register</h2>
                    </div>

                    <div className="lr_component_container">
                        {this.state.login === true ? 
                            <Login success={this.successfulLogin}/>
                        :
                            <Register success={this.successfulRegister}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
