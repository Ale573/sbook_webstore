import axios from 'axios';
import Auth from '../Auth/Auth';

export const register = newUser => {
    return axios 
        .post('http://127.0.0.1:5000/register', { newUser })
        .then(response => {
            Auth.authenticateUser(response.data)
        })
}