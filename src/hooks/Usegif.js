import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const url = tag
      ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
      : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    try {
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error('Error fetching gif:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [tag]); // Run whenever the tag changes

  return { gif, loading, fetchData };
};

export default useGif;
