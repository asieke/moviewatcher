import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import Movie from '../components/Movie';
import Found from '../components/Found';

interface HomeProps {
  title: string;
  emoji: string;
  foundStr: string;
  notFoundStr: string;
}

const Home = ({ title, emoji, foundStr, notFoundStr }: HomeProps) => {
  console.log(notFoundStr);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any>([]);
  const [movie, setMovie] = useState<any>(null);
  const [found, setFound] = useState(false);

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
    let temp = await axios.get(
      '/api/match?name=' + res.data.title + '&year=' + res.data.release_date.substring(0, 4)
    );
    setFound(temp.data.found);
    setMovie(res.data);
    setMovies([]);
  };

  return (
    <div className='flex-col md:w-3/4 w-full items-center text-center'>
      <Head>
        <title>{title}</title>
        <link
          rel='icon'
          href={`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`}
        />
      </Head>
      <h1 className='text-5xl font-extrabold mb-6 text-slate-200'>
        {emoji}
        {title}
        {emoji}
      </h1>
      <Search movies={movies} updateMovie={updateMovie} selectMovie={selectMovie} />
      {movie && <Found found={found} foundStr={foundStr} notFoundStr={notFoundStr} />}
      {movie && <Movie movie={movie} />}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  console.log(process.env);
  return {
    props: {
      title: process.env.title,
      emoji: process.env.emoji,
      foundStr: process.env.foundStr,
      notFoundStr: process.env.notFoundStr,
    },
  };
}
