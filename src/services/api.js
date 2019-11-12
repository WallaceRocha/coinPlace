const axios = require('axios');


const instance = axios.create({baseURL:'https://binance.com/'})
export default instance;