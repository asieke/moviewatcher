import { useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Movie from '../components/Movie';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any>([]);
  const [movie, setMovie] = useState<any>(null);

  const updateMovie = async (q: string) => {
    setQuery(q);
    if (q.length === 0) {
      setMovie(null);
    }
    if (q.length > 0) {
      let res = await axios.get('/api/search?query=' + q);
      setMovies(res.data.results.slice(0, 5));
    }
  };

  const selectMovie = async (id: number) => {
    let res = await axios.get('/api/select?id=' + id);
    setMovie(res.data);
    setMovies([]);
  };

  return (
    <div className='flex-col md:w-3/4 w-full'>
      <Search movies={movies} updateMovie={updateMovie} selectMovie={selectMovie} />
      {movie && <Movie movie={movie} />}
    </div>
  );
};

export default Home;
