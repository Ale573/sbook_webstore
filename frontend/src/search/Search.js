import React, { Component } from "react";
import Input from "../app/common/Input/Input";
import BookList from "../book/BookList";
import { searchInput } from "./SearchActions";

class Search extends Component {
  state = {
    query: "",
    results: [],
    error_message: {}
  };

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!(this.state.query.length > 0)) {
      formIsValid = false;
      errors["query"] = "*Please enter what you want to search.";
    }

    this.setState({
      error_message: errors
    });

    return formIsValid;
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      if (this.props.search === false) {
        this.props.searchActive();
      }

      searchInput(this.state.query).then(res => {
        if (res.status === 200) {
          this.setState({
            results: res.data
          });
        } else {
          let errors = {
            query: res.data["msg"]
          };
          this.setState({
            error_message: errors
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="search">
        <form className="form-container" onSubmit={this.onSubmit}>
          <Input
            type="search"
            name="query"
            id="query"
            placeholder="Book name..."
            onChange={this.handleFormChange}
            value={this.state.query}
          />
          <p className="error-message">{this.state.error_message.query}</p>
        </form>
        <BookList book_list={this.state.results} />
      </div>
    );
  }
}

export default Search;
