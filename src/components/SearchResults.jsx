import { useEffect, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import Loader from './Loader';

function SearchResults({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchSearch = async () => {
      try {
        setLoading(true);
        const resp = await GlobalApi.searchMovies(query);
        setMovies(resp.data.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [query]);

  if (!query) return null;

  return (
    <div className="px-5 md:px-16 my-6">
      <h2 className="text-white text-lg mb-4">
        Search results for "{query}"
      </h2>

      {loading ? (
        <Loader />
      ) : movies.length === 0 ? (
        <p className="text-gray-400">No results found</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
