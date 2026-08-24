// api.js
import axios from 'axios';

export const uploadApi = axios.create({
  baseURL: 'http://192.168.1.7:500',
  timeout: 10000, // 10 seconds
});


