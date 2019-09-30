import React, { Component } from 'react';

import Logo from '../images/book_icon.png';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <header>
                    <img className="logo" src={Logo} alt="Book Logo" height="100" width="120"/>
                    <h1 className="title">S-Book Webstore</h1>
                </header>
            </div>
        )
    }
}

export default NavBar;
