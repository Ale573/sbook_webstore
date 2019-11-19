import axios from 'axios';

export const searchInput = input => {
    return axios
    .post('http://127.0.0.1:5000/searchInput', {input})
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
}