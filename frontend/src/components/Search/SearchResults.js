import React, { Component } from "react";

import Book from '../Book/Book';

export class SearchResults extends Component {
  render() {
    return (
      <div className="search_viewer">
        {this.props.data.map(book => (
          <Book key={book[0]} id={book[0]} name={book[3]} image={book[2]} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
