import axios from 'axios';

export const updateProfile = profile => {
    return axios 
        .post('http://127.0.0.1:5000/updateProfile', { profile })
        .then(response => {
            return response
        })
}

export const getUserProfile = id => {
    return axios
        .post('http://127.0.0.1:5000/getProfile', { userId: id })
        .then(response => {
            return response
        })
        .catch(err => {
            return err.response
        })
}