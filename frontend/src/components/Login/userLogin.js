import axios from 'axios';

export const login = user => {
    return axios
        .post('http://127.0.0.1:5000/login', { user })
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}