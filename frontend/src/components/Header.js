import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Logo from '../images/book_icon.png';

export class Header extends Component {
    render() {
        return (
            <header className="main_header">
                <Link to="/"><img 
                    className="logo" 
                    src={Logo} 
                    alt="Book Logo" 
                    height="130" 
                    width="150"/>
                </Link>
                <h1 className="header_title">S-Book Webstore</h1>
            </header>
        )
    }
}

export default Header;
