import React, { Component, Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Auth from '../Auth/Auth';

import Logo from './images/book_icon.png';
import UserIcon from './images/user_logo.png';

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

                        <div className="dropdown">
                            <img 
                                className="user_icon"
                                src={UserIcon}
                                alt="User Logo"
                                height="65"
                                width="65"/>
                            <div className="dropdown-content">
                                <Link to="/profile" className="link">Profile</Link>
                                <Link to="" className="link" onClick={this.handleLogout}>Logout</Link>
                            </div>
                        </div>

                        <Link to="/selling">
                            <button
                                className="button"
                                type="button">
                                Sell
                            </button>
                        </Link>
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
