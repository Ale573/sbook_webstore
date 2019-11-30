import React from "react";
import { Link } from "react-router-dom";

const BookList = props => {
  return (
    <div className="book-list">
      {props.book_list.map(book => (
        <Link
          to={{
            pathname: "/book",
            state: {
              id: book[0],
              userId: book[1],
              image: book[2],
              name: book[3],
              author: book[4],
              year: book[5],
              edition: book[6],
              isbn: book[7],
              price: book[8],
              condition: book[9],

              offer_option: book[10],
              return_option: book[11],
              cash_method: book[12],
              cards_method: book[13]
            }
          }}
        >
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
        </Link>
      ))}
    </div>
  );
};

export default BookList;
