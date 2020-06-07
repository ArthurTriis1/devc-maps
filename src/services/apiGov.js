import axios from 'axios'

const apiGov = axios.create({
    baseURL: 'https://back-maps-saude-triis1.netlify.app/.netlify/functions/app'
})

export default apiGov;