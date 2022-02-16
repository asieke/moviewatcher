import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col px-10 py-10 items-center min-h-screen w-full bg-slate-700'>
      <h1 className='text-5xl font-extrabold mb-6 text-slate-200'>MovieWatcher</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
