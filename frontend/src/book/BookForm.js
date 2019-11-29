import React, { Component, Fragment } from "react";
import jwt_decode from "jwt-decode";
import Input from "../app/common/Input/Input";
import Button from "../app/common/Button/Button";
import Select from "../app/common/Select/Select";
import CheckBox from "../app/common/CheckBox/Checkbox";
import { sellingBook } from "./BooksActions";

export class BookForm extends Component {
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

      offer_option: false,
      return_option: false,
      cash_method: false,
      cards_method: false,

      error_message: {},
      success_message: "",

      step: 1,
      conditionOptions: ["As New", "Good", "Fair", "Poor"]
    };
  }

  handleFormChange = e => {
    const { name, value } = e.target;

    if (
      name === "offer_option" ||
      name === "return_option" ||
      name === "cash_method" ||
      name === "cards_method"
    ) {
      this.setState(state => ({
        [name]: !state[name]
      }));
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  changeStep = value => e => {
    e.preventDefault();
    this.setState(state => ({
      step: state.step + value
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    if (this.validateForm()) {
      const book = {
        userId: decoded.identity.id,
        image: "book_default.png",
        name: this.state.name,
        author: this.state.author,
        year: this.state.year,
        edition: this.state.edition,
        isbn: this.state.isbn,
        price: this.state.price,
        condition: this.state.condition,
        offer_option: this.state.offer_option,
        return_option: this.state.return_option,
        cash_method: this.state.cash_method,
        cards_method: this.state.cards_method
      };

      sellingBook(book).then(res => {
        if (res.status === 200) {
          this.setState({
            success_message: res.data["msg"]
          });
          this.props.history.push("/dash");
        }
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

    if (this.state.cash_method === false && this.state.cards_method === false) {
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
      <div className="selling-book">
        <h1 className="header-title">Selling Book Form</h1>

        <form className="form-container" onSubmit={this.onSubmit}>
          {this.state.step === 1 ? (
            <Fragment>
              <h2 className="">Step 1 of 2</h2>
              <Input
                title={"Book Name"}
                type={"text"}
                name={"name"}
                placeholder={"Enter the book name"}
                onChange={this.handleFormChange}
                value={this.state.name}
              />
              <p className="error-message">{this.state.error_message.name}</p>

              <Input
                title={"Author"}
                type={"text"}
                name={"author"}
                placeholder={"Enter the author"}
                onChange={this.handleFormChange}
                value={this.state.author}
              />
              <p className="error-message">{this.state.error_message.author}</p>

              <Input
                title={"Year"}
                type={"text"}
                name={"year"}
                placeholder={"Enter the year"}
                onChange={this.handleFormChange}
                value={this.state.year}
              />
              <p className="error-message">{this.state.error_message.year}</p>

              <Input
                title={"Edition"}
                type={"text"}
                name={"edition"}
                placeholder={"Enter the edition"}
                onChange={this.handleFormChange}
                value={this.state.edition}
              />
              <p className="error-message">
                {this.state.error_message.edition}
              </p>

              <Input
                title={"ISBN Number"}
                type={"text"}
                name={"isbn"}
                placeholder={"Enter the isbn number"}
                onChange={this.handleFormChange}
                value={this.state.isbn}
              />
              <p className="error-message">{this.state.error_message.isbn}</p>

              <Button
                title={"Next"}
                type={"button"}
                className={"button"}
                action={this.changeStep(1)}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="">Step 2 of 2</h2>
              <Input
                title={"Price"}
                type={"text"}
                name={"price"}
                placeholder={"Enter the price"}
                onChange={this.handleFormChange}
                value={this.state.price}
              />
              <p className="error-message">{this.state.error_message.price}</p>

              <fieldset className="select-container">
                <Select
                  title={"Condition:"}
                  name={"condition"}
                  options={this.state.conditionOptions}
                  value={this.state.condition}
                  placeholder={"Select Condition"}
                  onChange={this.handleFormChange}
                />
              </fieldset>
              <p className="error-message">{this.state.error_message.condition}</p>
              
              <div className="checkbox-division">
                <CheckBox
                  title={"Offer Option"}
                  type={"checkbox"}
                  name={"offer_option"}
                  id={"offer_option"}
                  onChange={this.handleFormChange}
                />
              </div>

              <div className="checkbox-division">
                <CheckBox
                  title={"Return Option"}
                  type={"checkbox"}
                  name={"return_option"}
                  id={"return_option"}
                  onChange={this.handleFormChange}
                />
              </div>

              <h2 className="form-label-text">Select the payment method:</h2>
              <div className="checkbox-division">
                <CheckBox
                  title={"Cash"}
                  type={"checkbox"}
                  name={"cash_method"}
                  id={"cash_method"}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="checkbox-division">
                <CheckBox
                  title={"Cards"}
                  type={"checkbox"}
                  name={"cards_method"}
                  id={"cards_method"}
                  onChange={this.handleFormChange}
                />
              </div>
              <p className="error-message">{this.state.error_message.payment}</p>

              <Button title={"Submit"} type={"button"} className={"button"} action={this.onSubmit}></Button>

              <Button title={"Back"} type={"button"} className={"button"} action={this.changeStep(-1)}></Button>

              <p className="success-message">{this.state.success_message}</p>
            </Fragment>
          )}
        </form>
      </div>
    );
  }
}

export default BookForm;
