import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { searchInput } from "./searchFunction";
import Viewer from "./Viewer";

class Search extends Component {
  state = {
    query: "",
    results: [],
    error_message: {}
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
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
        <form className="search_form">
          <input
            className="input_box"
            type="search"
            id="filter"
            placeholder="Book name..."
            onChange={this.handleChange}
            value={this.state.query}
          />

          <Link to="/dash/search"><button
            className="submit_button"
            type="button"
            onClick={this.onSubmit}
          >
            Go
          </button></Link>

          <p className="error_message">{this.state.error_message.query}</p>

        </form>
        <Viewer results={this.state.results} />
      </div>
    );
  }
}

export default Search;
