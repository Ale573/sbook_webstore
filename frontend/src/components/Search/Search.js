import React, { Component } from "react";
import { searchInput } from "./searchFunction";
import SearchResults from "./SearchResults";

class Search extends Component {
  state = {
    query: "",
    data: [],
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
      this.setState({
        data: []
      });
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
            data: res.data
          });
        } else {
          let errors = {};
          errors["query"] = res.data["msg"];
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
            placeholder="Search for..."
            onChange={this.handleChange}
            value={this.state.query}
          />

          <p className="error_message">{this.state.error_message.query}</p>

          <button
            className="submit_button"
            type="button"
            onClick={this.onSubmit}
          >
            Search
          </button>
        </form>
        <SearchResults data={this.state.data} />
      </div>
    );
  }
}

export default Search;
