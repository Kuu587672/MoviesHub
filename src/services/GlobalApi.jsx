import axios from 'axios';

const movieBaseURL = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_API_KEY;

//https://api.themoviedb.org/3/trending/all/day?api_key=1bf51d5e9d64b51d0c607986941fadf6
const getTrendingMovies = () => {
    return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}`);
}

export default {
    getTrendingMovies,
}