import React, { Component } from 'react';

export class Book extends Component {
    constructor(props){
    super(props)

    this.state={
        id: this.props.id,
        name: this.props.name,
    }
}
    render() {
        return (
            <div className="book">
                <div className="book_container">
                    <img 
                        className="book_cover" 
                        src={this.props.image} 
                        alt="Book Cover" 
                        height="340" 
                        width="300"/>
                    <h3 className="book_name">{this.state.name}</h3>
                </div>
            </div>
        )
    }
}

export default Book;
