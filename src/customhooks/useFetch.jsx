import { useEffect } from "react";
import { useState } from "react";

function useFetch(props) {
  const URL = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTheData(URL);
  }, []);

  const fetchTheData = async (URL) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(URL);
      const userData = await response.json();
      setLoading(false);
      setData(userData);
    } catch (error) {
      setError(true);
    }
  };

  return [data, loading, error];
}

export default useFetch;
