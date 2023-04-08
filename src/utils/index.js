import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const { request_token } = data;

    if (data.success) {
      localStorage.setItem('request_token', request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchSessionID = async () => {
  const token = localStorage.getItem('request_token');
  if (token) {
    try {
      const { data } = await moviesApi.post('/authentication/session/new', {
        request_token: token,
      });
      const { session_id } = data;

      localStorage.setItem('session_id', session_id);
      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
  return null;
};
