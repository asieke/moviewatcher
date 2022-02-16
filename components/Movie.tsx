import Image from 'next/image';

interface MovieProps {
  movie: any;
}

const Movie = ({ movie }: MovieProps) => {
  console.log(movie);

  return (
    <div className='my-8 p-6 bg-slate-300 flex flex-col lg:flex-row items-center'>
      <div className='flex sm:w-[360px] self-center'>
        <Image
          width={360}
          height={480}
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      </div>
      <div className='flex flex-col flex-1 px-5 self-start'>
        <h2 className='text-3xl font-bold mt-8 lg:mt-0'>
          {movie.original_title}
          <span className='text-xl italic font-normal'> ({movie.release_date})</span>
        </h2>
        <p className='mt-4 text-xl italic'>{movie.tagline}</p>
        <p className='mt-5 text-lg leading-8'>{movie.overview}</p>
        <p className='mt-4 text-xl'>
          <b>Budget: </b>${movie.budget}
        </p>
        <p className='mt-4 text-xl'>
          <b>Box Office: </b>${movie.revenue}
        </p>
        <p className='mt-4 text-xl'>
          <b>Runtime: </b>
          {movie.runtime}min
        </p>
      </div>
    </div>
  );
};

export default Movie;
