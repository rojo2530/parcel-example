import axios from 'axios';

const API_URL = 'https://swapi.co/api/films';

const api = () => {
  return {
    getFilms: async () => {
      try {
        const response = await axios.get(API_URL);
        return response.data.results;
      } catch (err) {
        console.error(err)
      }
    }
  }
}

export default api;