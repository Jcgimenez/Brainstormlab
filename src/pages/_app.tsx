import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <Component {...pageProps} />;
}
