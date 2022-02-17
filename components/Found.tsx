interface FoundProps {
  found: boolean;
  foundStr: string;
  notFoundStr: string;
}

const Found = ({ found, foundStr, notFoundStr }: FoundProps) => {
  return (
    <div className='flex w-full my-8 p-6 bg-slate-300 rounded-md shadow-md shadow-black'>
      {found === true && <h1 className='text-3xl font-extrabold w-full'>{foundStr}</h1>}
      {found === false && <h1 className='text-3xl font-extrabold w-full'>{notFoundStr}</h1>}
    </div>
  );
};

export default Found;
