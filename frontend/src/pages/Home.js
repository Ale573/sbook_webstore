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

    successfulLogin = () => {
        this.props.history.push('/dash');
    }

    successfulRegister = () => {
        this.setState({
            login: true,
            register: false
        });
    }

    render() {
        return (
            <div className="home">
                <div className="lr_background"></div>
                <div className="lr_container">
                    <div className="title_container">
                        <h2 className={this.state.login ? "section_title_active":"section_title"} onClick={this.changeLogin}>Login</h2>
                        <h2 className={this.state.register ? "section_title_active":"section_title"} onClick={this.changeRegister}>Register</h2>
                    </div>

                    <div className="lr_component_container">
                        {this.state.login === true ? 
                            <Login success={this.successfulLogin}/>
                        :
                            <Register success={this.successfulRegister}/>
                        }
                    </div>
                </div>

                <article className="about_container">
                    <h2>About</h2>
                    {/* TODO */}
                </article>
                <article className="features_container">
                    <h2>Features</h2>
                    {/* TODO */}
                </article>
            </div>
        )
    }
}

export default Home;
