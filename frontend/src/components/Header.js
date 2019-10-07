import React, { Component, Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Auth from '../components/Auth';

import Logo from '../images/book_icon.png';

export class Header extends Component {

    handleLogout = async (e) => {
        Auth.deauthenticateUser();
        this.props.history.push('/');
    }

    render() {
        return (
            <header className="main_header">

                {Auth.isUserAuthenticated() ? 
                    <Fragment>
                        <Link to="/dash"><img 
                            className="logo" 
                            src={Logo} 
                            alt="Book Logo" 
                            height="130" 
                            width="150"/>
                        </Link>
                        <h1 className="header_title">S-Book Webstore</h1>

                        <button
                            className="logout_button"
                            type="button"
                            onClick={this.handleLogout}>
                            Logout
                      </button>
                    </Fragment>
                : 
                    <Fragment>
                        <Link to="/"><img 
                            className="logo" 
                            src={Logo} 
                            alt="Book Logo" 
                            height="130" 
                            width="150"/>
                        </Link>
                        <h1 className="header_title">S-Book Webstore</h1>
                    </Fragment>
                }
            </header>
        )
    }
}

export default withRouter(Header);
