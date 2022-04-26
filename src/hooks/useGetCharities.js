import { COUNT_QUERY } from "../queries";
import { useQuery } from "@apollo/react-hooks";
import { useEffect, useState } from "react";
import { formatData } from "../utils/helpers";

export const useGetCharities = () => {
  const [formattedData, setFormattedData] = useState([]);
  const { loading, error, data } = useQuery(COUNT_QUERY);

  useEffect(() => {
    if (!loading && !error) {
      const result = formatData(data.CHC.getCharities.list);
      setFormattedData(result);
    }
  }, [loading, error, data, setFormattedData]);

  return {
    loading,
    error,
    data: formattedData,
  };
};
