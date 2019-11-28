import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

import BookList from '../book/BookList';
import { getUserProfile } from './UserActions';

export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            address: '',
            phone: '',
            books:[]
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        const user_id = decoded.identity.id;

        getUserProfile(user_id).then(res => {
            if(res.status === 200) {
                let results = res.data;
                let books = [];
                for(let i = 7; i < results.length; i++) {
                    books[i] = results[i]
                }
                this.setState({
                    name: results[2],
                    email: results[3],
                    address: results[4],
                    phone: results[6],
                    books: books
                })
            }
        })
    }

    render() {
        return (
            <div className="profile">
                <div className="user_profile">
                    <h1 className="profile_title">Profile: <Link className="user_link" to="/edit">Edit</Link></h1>
                    <h2 className="user_profile_item">Name: {this.state.name}</h2>
                    <h2 className="user_profile_item">Email: {this.state.email}</h2>
                    <h2 className="user_profile_item">Address: {this.state.address}</h2>
                    <h2 className="user_profile_item">Phone: {this.state.phone}</h2>
                </div>

                <h1 className="profile_title">Books on sale:</h1>
                <BookList book_list={this.state.books} /> 
            </div>
        )
    }
}

export default Profile;
