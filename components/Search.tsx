interface SearchProps {
  updateMovie: (q: string) => void;
  selectMovie: (id: number) => void;
  movies: Array<any>;
}

const Search = ({ movies = [], updateMovie, selectMovie }: SearchProps) => {
  return (
    <div className='w-full'>
      <input
        type='search'
        className='px-5 py-3 mt-4 rounded-md text-3xl w-full'
        placeholder='Movie'
        onChange={(e) => updateMovie(e.target.value)}
      ></input>
      <div className='text-2xl bg-slate-900 mx-1 z-10'>
        <ul>
          {movies.map((x, i) => (
            <li key={i} onClick={() => selectMovie(x.id)}>
              {x.title + ' (' + (x.release_date ? x.release_date.substring(0, 4) : '') + ')'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
