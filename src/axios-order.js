import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-d8b73.firebaseio.com/'
})

export default instance;