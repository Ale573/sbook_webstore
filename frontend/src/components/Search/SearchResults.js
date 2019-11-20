import React, { Component } from "react";


import Cover from '../Book/images/booktest.jpg';
import Book from '../Book/Book';

export class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(book => (
          <Book key={book.id} id={book.id} name={book.name} image={Cover} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
