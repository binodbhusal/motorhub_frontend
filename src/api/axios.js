import axios from 'axios';

export default axios.create({

  baseURL: 'http://localhost:3000',
  REGISTER_URL: 'http://localhost:3000/users',
  LOGIN_URL: 'http://localhost:3000/users/sign_in',
});
