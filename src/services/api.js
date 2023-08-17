// my key 2bfd86d2dd2f7096b5d1ce4da638bbb5eff5ab7b
import axios from "axios";

export const key = "2bfd86d2dd2f7096b5d1ce4da638bbb5eff5ab7b";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key} `
    }
})

export default api;

