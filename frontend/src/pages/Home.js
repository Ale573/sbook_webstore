import React, { Component } from 'react';

import Login from '../components/Login';
import Register from '../components/Register';

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

    render() {
        return (
            <div className="home">   

                <div className="login_register_container">
                    <div className="title_container">
                        <h2 className={this.state.login ? "section_title_active":"section_title"} onClick={this.changeLogin}>Login</h2>
                        <h2 className={this.state.register ? "section_title_active":"section_title"} onClick={this.changeRegister}>Register</h2>
                    </div>

                    <div className="component_container">
                        {this.state.login === true ? 
                            <Login />
                        :
                            <Register />
                        }
                    </div>
                </div>

                <article className="about_container">
                    <h2>About</h2>
                </article>
                <article className="features_container">
                    <h2>Features</h2>
                </article>
            </div>
        )
    }
}

export default Home;
