import { useCallback } from "react";

const useHttp = () => {
  const fetchApi = useCallback(async (config, setData) => {
    const response = await fetch(config.url, {
      method: config.method ? config.method : "GET",
      headers: config.headers ? config.headers : {},
      body: config.body ? config.body : null,
    });
    const data = await response.json();
    setData(data);
  }, []);
  return {
    fetchApi,
  };
};

export default useHttp;
