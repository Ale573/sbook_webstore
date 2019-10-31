import axios from 'axios';

export const updateProfileFunction = profile => {
    return axios 
        .post('http://127.0.0.1:5000/updateProfile', { profile })
        .then(response => {
            console.log(response.data)
        })
}

export const getUserProfile = id => {
    return axios
        .post('http://127.0.0.1:5000/getProfile', { userId: id })
        .then(response => {
            return response.data
        })
}