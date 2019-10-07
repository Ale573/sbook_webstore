import React, { Component } from 'react'
import Cover from '../images/booktest.jpg'
import Book from '../components/Book'

export class Dash extends Component {
    constructor(props){
        super(props)
        this.state={
            books:[
                {
                    id: '0',
                    name:'Book 1',
                    author: 'Author 1',
                    year: '2000'
                },
                {
                    id: '1',
                    name:'Book 2',
                    author: 'Author 2',
                    year: '2001'
                },
                {
                    id: '2',
                    name:'Book 3',
                    author: 'Author 3',
                    year: '2002'
                },
                {
                    id: '3',
                    name:'Book 4',
                    author: 'Author 4',
                    year: '2003'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.books.map(book =>
                   <Book
                        {...book}
                        key={book[id]}
                        name={book[name]}
                        author={book[author]}
                        year={book[year]}>   
                        </Book>
                    )}
                   
                
            </div>
        )
    }
}

export default Dash;
