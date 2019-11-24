import axios from 'axios';

export const getBooks = data => {
    return axios
        .post('http://127.0.0.1:5000/getBooks', { data })
        .then(response => {
            return response.data
        })
}