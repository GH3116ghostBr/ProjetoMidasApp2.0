  import axios from 'axios';

  export const api = axios.create({
    baseURL: 'https://danielhernanrpgapi.azurewebsites.net',
  });

  api.interceptors.request.use(
  async (config) => {
    const token =
      localStorage.getItem('token');

    console.log('TOKEN →', token);

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    console.log(
      'HEADERS →',
      config.headers
    );

    return config;
  },
  (error) => Promise.reject(error)
);