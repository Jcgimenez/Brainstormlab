// pages/_app.tsx
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NoSSRWrapper from '@/components/NoSSRWrapper';

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <NoSSRWrapper Component={Component} pageProps={pageProps} />
      <ToastContainer />
    </>
  );
}
