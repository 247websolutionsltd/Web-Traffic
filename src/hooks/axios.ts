// api.js
import axios from 'axios';

export const uploadApi = axios.create({
  baseURL: 'http://192.168.1.6:500',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',

  },
});


