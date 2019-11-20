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

    if(!(this.state.query.length > 0)) {
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
        let books = [
            {
                'id': '0',
                'name':'Cell Biology',
                'author': 'Author 1',
                'year': '2000'
            },
            {
                'id': '1',
                'name':'Cell Biology',
                'author': 'Author 2',
                'year': '2001'
            },
            {
                'id': '2',
                'name':'Cell Biology',
                'author': 'Author 3',
                'year': '2002'
            },
            {
                'id': '3',
                'name':'Cell Biology',
                'author': 'Author 4',
                'year': '2003'
            }
        ]
        this.setState({
            data: books
        })
      // searchInput(this.state.query).then(res => {
      //     this.setState({
      //         data: res
      //     })
      // })
    }
  };

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            type="search"
            id="filter"
            placeholder="Search for..."
            onChange={this.handleChange}
            value={this.state.query}
          />
          <button className="" type="button" onClick={this.onSubmit}>
            Search
          </button>
        </form>

        {this.state.data.length > 0 && 
            <SearchResults data={this.state.data}/>
        }
      </div>
    );
  }
}

export default Search;
