import { useCallback, useState } from "react";

const useHttp = () => {
  const fetchApi = useCallback(async (config) => {
    const response = await fetch(config.url, {
      method: config.method ? config.method : "GET",
      headers: config.headers ? config.headers : {},
      body: config.body ? config.body : null,
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
  }, []);
  return {
    fetchApi,
  };
};

export default useHttp;
