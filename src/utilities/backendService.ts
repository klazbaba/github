import axios from 'axios';

axios.defaults.timeout = 60000;
axios.defaults.baseURL = 'https://api.github.com/';

export default axios;
