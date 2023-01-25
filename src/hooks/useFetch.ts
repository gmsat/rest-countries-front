import { useEffect, useState } from 'react';

function useFetch(_url: string, _fetchOnLoad: boolean) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

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
        console.log(res.data)
        setData(res.data);
        setLoading(false)
        setError(null)
      })
      .catch(e => {
        setError(e);
        setLoading(false)
      })
  }

  const reFetch = () => {
    fetchData().catch(e => console.log(e))
  }

  const clearData = () => setData(null)

  return {data, loading, error, reFetch, clearData};
}

export default useFetch;