import axios from 'axios';

export const sellingBook = book => {
    return axios 
        .post('http://127.0.0.1:5000/sellingBook', { book })
        .then(response => {
            return response
        })
}

export const getBook = id => {
    return axios 
        .post('http://127.0.0.1:5000/getBook', { bookId:id })
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}