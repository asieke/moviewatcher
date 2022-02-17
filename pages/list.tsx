import { db } from '../lib/db';
import { useState } from 'react';

interface ListProps {
  emoji: string;
}

const List = ({ emoji }: ListProps) => {
  const [page, setPage] = useState<number>(1);
  const perPage = 50;

  console.log(db);
  let disp = db.slice((page - 1) * perPage, page * perPage);

  console.log(disp);

  return (
    <div className='text-center'>
      <h1 className='text-2xl sm:text-5xl  font-extrabold mb-6 text-slate-200'>
        {`${emoji} Top Movies ${emoji}`}
      </h1>
      <table className='justify-around mb-4 w-[250px] mx-auto text-slate-200 font-bold'>
        <tr>
          <td className='w-1/3'>{page > 1 && <a onClick={() => setPage(page - 1)}>Previous</a>}</td>
          <td className='w-1/3'>Page {page}</td>
          <td className='w-1/3'>
            {page * perPage < db.length && <a onClick={() => setPage(page + 1)}>Next</a>}
          </td>
        </tr>
      </table>

      {disp.map((x, i) => {
        return <p className='mb-3 text-xl text-slate-200' key={i}>{`${x.name} (${x.year})`}</p>;
      })}
    </div>
  );
};

export default List;

export async function getStaticProps() {
  console.log(process.env);
  return {
    props: {
      emoji: process.env.emoji,
    },
  };
}
