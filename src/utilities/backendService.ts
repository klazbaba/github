import axios from 'axios';

axios.defaults.timeout = 60000;
axios.defaults.baseURL = 'https://api.github.com/';

export const setToken = (token: string) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export default axios;
