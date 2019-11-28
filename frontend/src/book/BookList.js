import React from "react";

const BookList = props => {
  return (
    <div className="book-list">
      {props.book_list.map(book => (
        <div key={book[0]} className="book-container">
          <img
            className="book-cover"
            src={require("../book/images/" + book[2])}
            alt="Book Cover"
            height="380"
            width="300"
          />
          <h3 className="book-name">{book[3]}</h3>
        </div>
      ))}
    </div>
  );
};

export default BookList;
