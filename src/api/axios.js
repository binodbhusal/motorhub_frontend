import axios from 'axios';

export default axios.create({

  baseURL: 'https://motorhubbackend-production.up.railway.app',
  REGISTER_URL: 'https://motorhubbackend-production.up.railway.app/users',
  LOGIN_URL: 'https://motorhubbackend-production.up.railway.app/users/sign_in',
});
