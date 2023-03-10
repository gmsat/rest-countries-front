import { useEffect, useState } from 'react';

function useFetch(_url: string, _fetchOnLoad: boolean = false, _log: boolean = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (_fetchOnLoad) {
      reFetch();
    }
  }, [])

  async function fetchData() {
    setData(null);
    setLoading(true);

    await fetch(`${_url}`)
      .then(res => res.json())
      .then(res => {
        if (_log) { console.log(res); }

        setData(res);
        setLoading(false);
        setError(null);
      })
      .catch(e => {
        if (_log) { console.log("error:", e); }

        setError(e);
        setLoading(false);
      });
  }

  const reFetch = () => {
    fetchData().catch(e => console.log(e));
  }

  const clearData = () => setData(null);

  return {data, loading, error, reFetch, clearData};
}

export default useFetch;