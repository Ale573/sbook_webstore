import React, { Component } from 'react';

import Login from '../components/Login';
import Register from '../components/Register';

export class Home extends Component {

    render() {
        return (
            <div className="home">   

                <div className="login_register_container">
                   <h2>Login</h2>
                    <Login />
                   <h2>Register</h2>
                   <Register />
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
