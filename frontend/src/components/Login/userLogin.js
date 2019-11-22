import axios from 'axios';
import Auth from '../Auth/Auth';

export const login = user => {
    return axios
        .post('http://127.0.0.1:5000/login', { user })
        .then(response => {
            Auth.authenticateUser(response.data)
        })
        .catch(err => {
            return err
        })
}