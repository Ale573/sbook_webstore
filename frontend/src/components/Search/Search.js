import React, { Component } from 'react';
import { searchInput } from "./searchFunction";

class Search extends Component {
    state = {
        query: '',
        error_message: {},
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value.toLowerCase()
        })
        if (this.state.query.length > 0){
            this.props.searchActive();
        }
    }

    validateForm= () => {
        let errors = {};
        let formIsValid = true;

        if (!(this.state.query > 0)){
            formIsValid = false;
            errors ["query"] = "*Please enter what you want to search.";
        }
        this.setState({
            error_message: errors
        });

        return formIsValid;
    }

    onSubmit = e => {
        if (this.validateForm()) {
            this.props.getSearchData();
        }
    }

    render() {
        return (
            <div className="searchForm">
                <form>
                    <input 
                    type="search" 
                    id="filter" 
                    placeholder="Search for..." 
                    onChange={this.handleInputChange}
                    value= {this.state.query}
                    />
                    <button 
                        className =''
                        type= "button"
                        onClick= {this.onSubmit}
                    >
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;