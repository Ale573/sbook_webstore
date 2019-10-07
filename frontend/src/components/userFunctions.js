/* 
    Class that controls the connection between the backend and the frontend. 
*/
import axios from 'axios';
import Auth from './Auth';

export const register = newUser => {
    return axios 
        .post('http://jsonplaceholder.typicode.com/users', { newUser })
        .then(response => {
            console.log("Registered")
            console.log(response.data)
        })
}

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
