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

    componentDidMount = () => {
        const token = localStorage.usertoken
        console.log(token)
        //const decoded = jwt_decode(token)
        this.setState({
          id: token[0].id,
          username: token[0].username,
          email: token[0].email,
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.username} in the Dash!</h1>
            </div>
        )
    }
}

export default Dash;
