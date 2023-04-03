import axios from 'axios';

const BASE_URL = 'https://6389df1b4eccb986e89cf319.mockapi.io/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
