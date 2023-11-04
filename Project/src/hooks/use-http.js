import { useCallback, useState } from "react";

const useHttp = (datafn ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (fetchConfig) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(fetchConfig.url, {
        method: fetchConfig.method ? fetchConfig.method : "GET",
        headers: fetchConfig.headers ? fetchConfig.headers : {},
        body: fetchConfig.body ? fetchConfig.body : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json()
      datafn(data)

    } catch (err) {
        setError(err.message)
    }
  },[]);
  
  return {
    isLoading,
    error,
    sendRequest
  }
};

export default useHttp;
