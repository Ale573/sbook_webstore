import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

import Book from '../Book/Book';
import { getUserProfile } from './updateFunction';

export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            email: '',
            address: '',
            phone: '',
            books:[]
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

        getUserProfile(decoded.identity.id).then(res => {
            let books = [];
            for(let i = 7; i < res.length; i++) {
                books[i] = res[i]
            }
            this.setState({
                name: res[2],
                email: res[3],
                address: res[4],
                phone: res[6],
                books: books
            })
        })
    }

    render() {
        return (
            <div className="profile">
                <div className="user_profile">
                    <h1 className="profile_title">Profile <Link className="user_link" to="/updateProfile">Edit</Link></h1>
                    <h2 className="user_profile_item">Name: {this.state.name}</h2>
                    <h2 className="user_profile_item">Email: {this.state.email}</h2>
                    <h2 className="user_profile_item">Address: {this.state.address}</h2>
                    <h2 className="user_profile_item">Phone: {this.state.phone}</h2>
                </div>

                <h1 className="profile_title">Books on sale</h1>
                {this.state.books.map( book =>
                    <Book key={book[0]} id={book[0]} name={book[3]} image={book[2]} /> 
                )}
            </div>
        )
    }
}

export default Profile;
