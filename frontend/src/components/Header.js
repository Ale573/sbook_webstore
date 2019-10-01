import React, { Component } from 'react';

import Logo from '../images/book_icon.png';

export class Header extends Component {
    render() {
        return (
            <header className="main_header">
                <img 
                    className="logo" 
                    src={Logo} 
                    alt="Book Logo" 
                    height="130" 
                    width="150"/>
                <h1 className="header_title">S-Book Webstore</h1>
            </header>
        )
    }
}

export default Header;
