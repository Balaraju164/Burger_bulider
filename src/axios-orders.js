import axios from 'axios';

const instance = axios.create({
    baseURL:'https://my-burger-84ff4.firebaseio.com/'
});

export default instance;