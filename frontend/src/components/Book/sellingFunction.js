import axios from 'axios';

export const sellingBook = book => {
    return axios 
        .post('http://127.0.0.1:5000/sellingBook', { book })
        .then(response => {
            console.log(response.data)
        })
}