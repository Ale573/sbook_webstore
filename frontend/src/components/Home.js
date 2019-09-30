import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import NavBar from './NavBar';

export class Home extends Component {

    render() {
        return (
            <div className="home">

                <NavBar />     

                <div className="login_register_container">
                   <h2>Login</h2>
                    {/* Login Component */}
                   <h2>Register</h2>
                   {/* Register Component */}
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
