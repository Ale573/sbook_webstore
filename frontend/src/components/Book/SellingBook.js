import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { sellingBook } from "./sellingFunction";

export class SellingBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      author: "",
      year: "",
      edition: "",
      isbn: "",
      price: "",
      condition: "",

      offer: false,
      return_policy: false,
      cash: false,
      cards: false,

      error_message: {}
    };
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  offerChange = e => {
    if (this.state.offer === false) {
      this.setState({ offer: true });
    } else {
      this.setState({ offer: false });
    }
  };

  returnChange = e => {
    if (this.state.return_policy === false) {
      this.setState({ return_policy: true });
    } else {
      this.setState({ return_policy: false });
    }
  };

  cashChange = e => {
    if (this.state.cash === false) {
      this.setState({ cash: true });
    } else {
      this.setState({ cash: false });
    }
  };

  cardsChange = e => {
    if (this.state.cards === false) {
      this.setState({ cards: true });
    } else {
      this.setState({ cards: false });
    }
  };

  onSubmit = e => {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    if (this.validateForm()) {
      const book = {
        userId: decoded.identity.id,
        name: this.state.name,
        author: this.state.author,
        year: this.state.year,
        edition: this.state.edition,
        isbn: this.state.isbn,
        price: this.state.price,
        condition: this.state.condition,
        offer: this.state.offer,
        return_policy: this.state.return_policy,
        cash: this.state.cash,
        cards: this.state.cards
      };

      sellingBook(book).then(res => {
        //TODO
      });
    }
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!(this.state.name.length > 0)) {
      formIsValid = false;
      errors["name"] = "*Please enter the book name.";
    }

    if (!(this.state.author.length > 0)) {
      formIsValid = false;
      errors["author"] = "*Please enter the author.";
    }

    if (!(this.state.year.length > 0)) {
      formIsValid = false;
      errors["year"] = "*Please enter the year.";
    }

    if (!(this.state.edition.length > 0)) {
      formIsValid = false;
      errors["edition"] = "*Please enter the edition.";
    }

    if (!(this.state.isbn.length > 0)) {
      formIsValid = false;
      errors["isbn"] = "*Please enter the IBSN number.";
    }

    if (this.state.isbn.length > 0 && this.state.isbn.length < 10) {
      formIsValid = false;
      errors["isbn"] = "*The ISBN number must have at least 10 digits.";
    }

    if (this.state.isbn.length > 13) {
      formIsValid = false;
      errors["isbn"] = "*The ISBN number is no longer than 13 digits.";
    }

    if (!(this.state.price.length > 0)) {
      formIsValid = false;
      errors["price"] = "*Please enter the price.";
    }

    if (!(this.state.condition.length > 0)) {
        formIsValid = false;
        errors["condition"] = "*Please choose one condition.";
    }

    if (this.state.cash === false && this.state.cards === false) {
        formIsValid = false;
        errors["payment"] = "*Please choose at least one payment method.";
    }

    this.setState({
      error_message: errors
    });

    return formIsValid;
  };

  render() {
    return (
      <div className="selling_book">
        <h1 className="header_title">Selling Book Form</h1>

        <form className="selling_form">
          <label className="label_text">Book Name</label>
          <input
            className="input_box"
            type="text"
            name="book_name"
            onChange={this.handleChange("name")}
            value={this.state.name}
          />
          <p className="error_message">{this.state.error_message.name}</p>

          <label className="label_text">Author</label>
          <input
            className="input_box"
            type="text"
            name="author"
            onChange={this.handleChange("author")}
            value={this.state.author}
          />
          <p className="error_message">{this.state.error_message.author}</p>

          <label className="label_text">Year</label>
          <input
            className="input_box"
            type="text"
            name="year"
            onChange={this.handleChange("year")}
            value={this.state.year}
          />
          <p className="error_message">{this.state.error_message.year}</p>

          <label className="label_text">Edition</label>
          <input
            className="input_box"
            type="text"
            name="edition"
            onChange={this.handleChange("edition")}
            value={this.state.edition}
          />
          <p className="error_message">{this.state.error_message.edition}</p>

          <label className="label_text">ISBN Number</label>
          <input
            className="input_box"
            type="text"
            name="isbn"
            onChange={this.handleChange("isbn")}
            value={this.state.isbn}
          />
          <p className="error_message">{this.state.error_message.isbn}</p>

          <label className="label_text">Price</label>
          <input
            className="input_box"
            type="text"
            name="price"
            onChange={this.handleChange("price")}
            value={this.state.price}
          />
          <p className="error_message">{this.state.error_message.price}</p>

          <div className="select_condition">
            <label className="label_text">Condition:</label>
            <select
              className="input_select"
              onChange={this.handleChange('condition')}
              value={this.state.condition}
            >
              <option value="">- Select -</option>
              <option value="as_new">As new</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>
          <p className="error_message">{this.state.error_message.condition}</p>

          <div className="checkbox_division">
            <input
              className="checkbox"
              type="checkbox"
              name="offer"
              id="offer"
              onChange={this.offerChange}
            />
            <label className="checkbox_text" htmlFor="offer">
              Offer Option
            </label>
          </div>

          <div className="checkbox_division">
            <input
              className="checkbox"
              type="checkbox"
              name="return_policy"
              id="return_policy"
              onChange={this.returnChange}
            />
            <label className="checkbox_text" htmlFor="return_policy">
              Return Option
            </label>
          </div>

          <div className="checkbox_division">
            <label className="label_text">Select the payment method:</label>
            <input
              className="checkbox"
              type="checkbox"
              name="cash"
              id="cash"
              onChange={this.cashChange}
            />
            <label className="checkbox_text" htmlFor="cash">
              Cash
            </label>

            <input
              className="checkbox"
              type="checkbox"
              name="cards"
              id="cards"
              onChange={this.cardsChange}
            />
            <label className="checkbox_text" htmlFor="cards">
              Cards
            </label>
          </div>
          <p className="error_message">{this.state.error_message.payment}</p>

          <button
            className="submit_button"
            type="button"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SellingBook;
