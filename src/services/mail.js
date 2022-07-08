const API = process.env.NEXT_PUBLIC_API;
const pass = process.env.NEXT_PUBLIC_AUTH_P;
const pkey = process.env.NEXT_PUBLIC_P_KEY;
import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';

async function sendMail(data) {
  const bearer = jsonwebtoken.sign({ auth: `${pass}` }, `${pkey}`, { expiresIn: '1m' });
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      bearer: `${bearer}`,
    },
  };
  const response = await axios.post(`${API}`, data, config).catch(function (error) {
    if (error.response) {
      // Request made and server responded
      return error.response;
    } else if (error.request) {
      // The request was made but no response was received
      return error.request;
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.message;
    }
  });

  return response;
}

export default sendMail;
