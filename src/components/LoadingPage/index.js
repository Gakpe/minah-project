// components/LoadingPage.js

import { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Temps simulé de chargement (2 secondes)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200">
      <RingLoader color={'#123abc'} loading={loading} size={150} />
    </div>
  );
};

export default LoadingPage;
