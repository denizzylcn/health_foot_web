import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5130/api'  // Gerekirse ngrok linkinle değiştirirsin
});

export default API;
