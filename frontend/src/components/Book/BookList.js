import React, { Component } from 'react';

export class BookList extends Component {
    render() {
        return (
            <div className="book">
                <div className="book_container">
                    <img
                        className="book_cover" 
                        src={require('../Book/images/' + this.props.image)}
                        alt="Book Cover" 
                        height="380" 
                        width="300"/>
                    <h3 className="book_name">{this.props.name}</h3>
                </div>
            </div>
        )
    }
}

export default BookList;
