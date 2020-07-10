import axios from 'axios';

export default axios.create({
  timeout: 100000,
  baseURL: API_PREFIX,
  headers: {
    'Content-Type': 'application/json',
  },
  maxContentLength: 10000,
});
