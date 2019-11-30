import React, { Component } from "react";
import Button from "../app/common/Button/Button";

export class Book extends Component {
  render() {
    return (
      <div className="book-profile-container">
        <h1 className="book-name">{this.props.location.state.name}</h1>
        <img
          className="book-cover"
          src={require("../book/images/" + this.props.location.state.image)}
          alt="Book Cover"
          height="380"
          width="300"
        />
        <div className="book-sell-container">
          <h2 className="book-price">
            Price: ${this.props.location.state.price}
          </h2>
          <h3 className="book-seller">Seller: Ale573</h3>
          <h3 className="book-sell-info">
            Shipment: Free within 1-2 bussiness day
          </h3>
          <h3 className="book-sell-info">Return: Avaliable</h3>
          <h3 className="book-sell-info">Method Payment: Cash and Cards</h3>

          <Button title={"Buy"} type={"button"} className={"button"} />
          <Button title={"Offer"} type={"button"} className={"button"} />
        </div>

        <div className="book-info-container">
          <h2 className="book-info-title">Information:</h2>
          <h3 className="book-info">Name: {this.props.location.state.name}</h3>
          <h3 className="book-info">
            Author: {this.props.location.state.author}
          </h3>
          <h3 className="book-info">Year: {this.props.location.state.year}</h3>
          <h3 className="book-info">
            Edition: {this.props.location.state.edition}
          </h3>
        </div>

        <div className="book-condition-container">
          <h2 className="book-condition">
            Condition: Good
          </h2>
        </div>
      </div>
    );
  }
}

export default Book;
