// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/data'; // Flask API URL

const api = {
  getData: async () => {
    try {
      const response = await axios.get(API_URL);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};

export default api;
