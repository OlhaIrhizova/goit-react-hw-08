import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2ZhNTcxYmYyNzEwYmI0OTMzZGU5NDBiMjdkMGRjNSIsIm5iZiI6MTczOTAyMjI5NC4wNTMsInN1YiI6IjY3YTc1ZmQ2ZGNmNzVhZmJlMmYxMGRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R9Zq21i8GrNgoJqgXnKIyctIolDlv82GKbdlNmzU66o'
const options = {
 headers: {
Authorization: `Bearer ${API_TOKEN}`
 },
};



export const fetchTrendingMovies = async () => {
  try{
    const response = await axios.get(`${API_URL}/trending/movie/day`,{
      ...options,
      params: { language: 'en-US' },
    });
    
  return response.data.results; 
  

}catch (error) {
  console.error('Error fetching trending movies:', error);
  return [];
}};


export const searchMovies = async (query) => {
  try{
  const response = await axios.get(`${API_URL}/search/movie`, {
    ...options,
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });

  return response.data.results;

  } catch (error) {
    console.error(error);
    return [];
  }

}


export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`, {
      ...options,
      params: { language: 'en-US' },
    });
    return response.data;

  } catch (error) {
    console.error('Помилка при отриманні деталей фільму:', error);
    return null;
  }
};


export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/credits`, {
      ...options,
      params: { language: 'en-US' },
    });
    return response.data.cast;
  } catch (error) {
    console.error('Помилка при отриманні акторського складу:', error);
    return [];
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/reviews`, {
      ...options,
      params: { language: 'en-US', page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error('Помилка при отриманні оглядів:', error);
    return [];
  }
};

export const getMoviePoster = (path) => {
  return path ? `https://image.tmdb.org/t/p/w500${path}`:'https://via.placeholder.com/500x750?text=No+Image';
};


