import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <Component {...pageProps} />;
}
