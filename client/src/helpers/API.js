import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5500' });

// Response intercept
axiosInstance.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (error) => {
    return {
      success: false,
      data: { error },
    };
  }
);

export default axiosInstance;
