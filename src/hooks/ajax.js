import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = () => {

  const [options, setOptions] = useState({});
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function ajax() {
      if (Object.keys(options).length === 0) { 
        return; 
      }
      setIsLoading(true);
      try {
        const res = await axios(options);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    ajax();
  }, [options]);
  return { setOptions, response, error, isLoading, options };
};

export default useAjax;
