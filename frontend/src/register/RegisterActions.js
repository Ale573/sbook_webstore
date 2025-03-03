import axios from 'axios';

export const register = newUser => {
    return axios 
        .post('http://127.0.0.1:5000/register', { newUser })
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}