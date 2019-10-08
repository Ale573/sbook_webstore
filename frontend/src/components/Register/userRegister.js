import axios from 'axios';

export const register = newUser => {
    return axios 
        .post('http://jsonplaceholder.typicode.com/users', { newUser })
        .then(response => {
            console.log("Registered")
            console.log(response.data)
        })
}