import React, { Component } from 'react';

export class Book extends Component {
    constructor(props){
    super(props)

    this.state={
        id: this.props[0],
        name: this.props[1],
        author: this.props[2],
        year: this.props[3]
    }
}
    render() {
        return (
            <div>
                <h3>Book Profile</h3>
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Author: {this.state.author}</li>
                    <li>Year: {this.state.year}</li>
                </ul>
            </div>
        )
    }
}

export default Book;
