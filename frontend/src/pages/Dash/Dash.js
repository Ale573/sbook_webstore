import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';
import Search from '../../components/Search/Search'; 
//import Book from '../../components/Book/Book';

export class Dash extends Component {       
                
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            username: '',
            search: false
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.identity.username,
            status: decoded.identity.status
        })
    }

    searchActive = () => {
        this.setState({
            search: true
        });
    }

    render() {
        return (
            <div>
                {this.state.search === false &&
                    <Fragment>
                        <h1 className="welcome_message">Welcome <span style={span}>{this.state.username}</span>!</h1>
                    </Fragment>    
                }
                <Search search={this.state.search} searchActive={this.searchActive}/>
            </div>
        )
    }
}

const span = {
    color: 'green',
    fontStyle: 'italic'
}

export default Dash;
