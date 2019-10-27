import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import Book from '../Book/Book';

import Cover from './booktest.jpg';

export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            books:[
                {
                    'id': '0',
                    'name':'Cell Biology',
                    'author': 'Author 1',
                    'year': '2000'
                },
                {
                    'id': '1',
                    'name':'Cell Biology',
                    'author': 'Author 2',
                    'year': '2001'
                },
                {
                    'id': '2',
                    'name':'Cell Biology',
                    'author': 'Author 3',
                    'year': '2002'
                },
                {
                    'id': '3',
                    'name':'Cell Biology',
                    'author': 'Author 4',
                    'year': '2003'
                }
            ]
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            name: decoded.identity.name
        })
    }

    render() {
        return (
            <div className="user_profile">
                <h1 className="header_title">Profile</h1>
                <h2 className="user_profile_item">Name: {this.state.name}</h2>
                <h2 className="user_profile_item">University: University of Puerto Rico Mayaguez Campus</h2>

                <h1 className="header_title">Books on sale</h1>
                {this.state.books.map( book =>
                <Book
                    key={book.id}
                    id={book.id}
                    name={book.name}
                    image={Cover}
                  />  
                )}
            </div>
        )
    }
}

export default Profile;
