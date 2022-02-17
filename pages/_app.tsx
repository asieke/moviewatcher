import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col px-10 py-10 items-center min-h-screen w-full bg-slate-700'>
      <div className='flex mb-2 p-3'>
        <Link href='/list'>List</Link>
        &nbsp;|&nbsp;
        <Link href='/'>Search</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
