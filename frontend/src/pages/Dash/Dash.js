import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';
import Search from '../../components/Search/Search'; 


import Cover from './images/booktest.jpg';
import Book from '../../components/Book/Book';

export class Dash extends Component {       
                
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            username: '',
            status: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.identity.username,
            status: decoded.identity.status
        })
    }

    render() {
        return (
            <div>
                
                <h1 className="welcome_message">Welcome <span style={span}>{this.state.username}</span>!</h1>

                <Search/>
            </div>
        )
    }
}

const span = {
    color: 'green',
    fontStyle: 'italic'
}

export default Dash;
