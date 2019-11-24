import React, { Component } from "react";

import BookList from '../Book/BookList';

export class Viewer extends Component {
  render() {
    return (
      <div className="search_viewer">
        {this.props.results.map(book => (
          <BookList key={book[0]} id={book[0]} name={book[3]} image={book[2]} />
        ))}
      </div>
    );
  }
}

export default Viewer;
