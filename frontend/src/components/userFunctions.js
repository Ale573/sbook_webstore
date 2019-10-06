/* 
    Class that controls the connection between the backend and the frontend. 
*/
import axios from 'axios';
import Auth from './Auth';

export const register = newUser => {
    return axios 
        .post('http://jsonplaceholder.typicode.com/users', {
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post('http://jsonplaceholder.typicode.com/users', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            console.log(response.data)
            Auth.authenticateUser(response.data)
            return response.data
        })
        .catch(err => {
            return err
        })
}
