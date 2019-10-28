import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { sellingBook } from './sellingFunction';

export class SellingBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            author: '',
            year: '',
            edition: '',
            isbn: '',
            price: '',
            condition: '',
            offer: false,
            return_policy: false,
            cash: false,
            cards: false
        }
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    authorChange = (e) => {
        this.setState({
            author: e.target.value
        })
    }

    yearChange = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    editionChange = (e) => {
        this.setState({
            edition: e.target.value
        })
    }

    isbnChange = (e) => {
        this.setState({
            isbn: e.target.value
        })
    }

    priceChange = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    conditionChange = (e) => {
        this.setState({
            condition: e.target.value
        })
    }

    offerChange = (e) => {
        if(this.state.offer === false) {
            this.setState({offer: true})
        }
        else {
            this.setState({offer: false})
        }
    }

    returnChange = (e) => {
        if(this.state.return_policy === false) {
            this.setState({return_policy: true})
        }
        else {
            this.setState({return_policy: false})
        }
    }

    cashChange = (e) => {
        if(this.state.cash === false) {
            this.setState({cash: true})
        }
        else {
            this.setState({cash: false})
        }
    }

    cardsChange = (e) => {
        if(this.state.cards === false) {
            this.setState({cards: true})
        }
        else {
            this.setState({cards: false})
        }
    }

    onSubmit = (e) => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

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
        }

        sellingBook(book).then(res => {
            //TODO
        })
    }

    render() {
        return (
            <div className="selling_book">
                <h1 className="header_title">Selling Book Form</h1>

                <form>

                    <label className="label_text">Book Name</label>
                    <input
                        className="input_box"
                        type="text"
                        name="book_name"
                        onChange={this.nameChange}
                        value={this.state.name}
                    />

                    <label className="label_text">Author</label>
                    <input
                        className="input_box"
                        type="text"
                        name="author"
                        onChange={this.authorChange}
                        value={this.state.author}
                    />

                    <label className="label_text">Year</label>
                    <input
                        className="input_box"
                        type="text"
                        name="year"
                        onChange={this.yearChange}
                        value={this.state.year}
                    />

                    <label className="label_text">Edition</label>
                    <input
                        className="input_box"
                        type="text"
                        name="edition"
                        onChange={this.editionChange}
                        value={this.state.edition}
                    />

                    <label className="label_text">ISBN Number</label>
                    <input
                        className="input_box"
                        type="text"
                        name="isbn"
                        onChange={this.isbnChange}
                        value={this.state.isbn}
                    />

                    <label className="label_text">Price</label>
                    <input
                        className="input_box"
                        type="text"
                        name="price"
                        onChange={this.priceChange}
                        value={this.state.price}
                    />

                    <div className="select_condition">
                        <label className="label_text">Condition</label>
                        <select
                            className="input_select"
                            onChange={this.conditionChange}
                            value={this.state.condition}>
                                <option value="as_new">- Select -</option>
                                <option value="as_new">As new</option>
                                <option value="very_good">Very Good</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                        </select>
                    </div>

                    <input 
                        className="input_box"
                        type="checkbox" 
                        name="offer"
                        id="offer"
                        onChange={this.offerChange} />
                        <label htmlFor="offer">Offer</label>

                    <input 
                        className="input_box"
                        type="checkbox" 
                        name="return_policy"
                        id="return_policy"
                        onChange={this.returnChange} />
                        <label htmlFor="return_policy">Return</label>

                    <label>Select the payment method:</label>
                        <input 
                            className="input_box"
                            type="checkbox" 
                            name="cash"
                            id="cash"
                            onChange={this.cashChange} />
                            <label htmlFor="cash">Cash</label>

                        <input 
                            className="input_box"
                            type="checkbox" 
                            name="cards"
                            id="cards"
                            onChange={this.cardsChange} />
                            <label htmlFor="cards">Cards</label>

                    <button
                        className="submit_button"
                        type="button"
                        onClick={this.onSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default SellingBook;
