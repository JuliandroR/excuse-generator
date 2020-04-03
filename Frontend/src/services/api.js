import axios from 'axios'

const api = axios.create({
    baseURL: 'https://excuse-backend.herokuapp.com'
})

export default api;