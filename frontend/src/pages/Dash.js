import React, { Component } from 'react';

export class Dash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            username: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('usertoken')
        this.setState({
            username: token
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.username} to your Dash!</h1>
            </div>
        )
    }
}

export default Dash;
