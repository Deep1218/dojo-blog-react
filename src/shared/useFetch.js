import { useState, useEffect } from "react";

export const apiEndPoint = "http://localhost:8000";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(apiEndPoint + url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("No data found!!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Abort Error", err);
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
