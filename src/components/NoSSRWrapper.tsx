// components/NoSSRWrapper.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import IndexPage from '@/pages';
import BuscadorPage from '@/pages/buscador';


const NoSSRWrapper = ({ Component, pageProps }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component {...pageProps} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/buscador" element={<BuscadorPage />} />
      </Routes>
    </Router>
  );
};

export default NoSSRWrapper;
