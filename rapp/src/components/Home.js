import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get('https://dummy-kappa-azure.vercel.app/');
        setTitle(response.data.title);
      } catch (error) {
        console.error('Error fetching title:', error);
      }
    };

    fetchTitle();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
