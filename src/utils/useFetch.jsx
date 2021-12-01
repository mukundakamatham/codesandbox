import { useEffect, useState } from "react";
import axios from "axios";
export const UseEffect = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        setData(Response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  });
  return {
    loading,
    data,
    error
  };
};
