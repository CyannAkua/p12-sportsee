import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @description this is my hook for fetching the API
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return data;
}
