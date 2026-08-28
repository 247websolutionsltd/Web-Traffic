// api.js
import axios from 'axios';
const base = process.env.EXPO_PUBLIC_BASE_URL;
export const uploadApi = axios.create({
  baseURL: " https://webtraffic-backend-1.onrender.com",
  timeout: 15000, // 15 seconds
});