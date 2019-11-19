import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';
import Search from '../../components/Search/Search'; 
import { searchInput } from "../../components/Search/searchFunction";


import Cover from './images/booktest.jpg';
import Book from '../../components/Book/Book';

export class Dash extends Component {       
                
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            username: '',
            status: '',
            search : false,
            searchData: [],

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
            username: decoded.identity.username,
            status: decoded.identity.status
        })
    }

    searchActive = () => {
        if (this.state.search === false){
            this.setState({
                search: true
            })
        } else{
            this.setState({
                search: false
            })
        }
    }

    getSearchData = () => {
        searchInput(this.state.query).then(res => {
            this.setState({
                searchData: res
            })
        })
    }

    render() {
        return (
            <div>
                <Search searchActive = {this.searchActive} getSearchData = {this.getSearchData}/>
                
                <h1 className="welcome_message">Welcome <span style={span}>{this.state.username}</span>!</h1>
                
                <h2 className="recommend_message">Here are some recommended Books!</h2>

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

const span = {
    color: 'green',
    fontStyle: 'italic'
}

export default Dash;
