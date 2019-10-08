import axios from 'axios';
import Auth from '../Auth/Auth';

export const login = user => {
    return axios
        .get('http://jsonplaceholder.typicode.com/users', {
            params: {
                email: user.email
            }
        })
        .then(response => {
            Auth.authenticateUser(response.data[0].username) //Testing purpose
        })
        .catch(error => {
            return error
        })
}