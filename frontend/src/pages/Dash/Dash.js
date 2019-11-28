import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';
import Search from '../../search/Search'; 
import BookList from '../../book/BookList';
import { getBooks } from './DashActions';

export class Dash extends Component {                  
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            recom_books: [],
            search: false
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            username: decoded.identity.username
        });

        const list = {
            book1: 1,
            book2: 2
        };

        getBooks(list).then(res => {
            this.setState({
                recom_books: res
            });
        });
    }

    searchActive = () => {
        this.setState({
            search: true
        });
    }

    render() {
        return (
            <div>
                <Search search={this.state.search} searchActive={this.searchActive}/>
                {this.state.search === false &&
                    <Fragment>
                        <h1 className="welcome_message">Welcome <span style={span}>{this.state.username}</span>!</h1>
                        <h2 className="recommend_message">Some recommended books:</h2>
                        <BookList book_list={this.state.recom_books}/> 
                    </Fragment>    
                }
            </div>
        )
    }
}

const span = {
    color: 'green',
    fontStyle: 'italic'
}

export default Dash;
