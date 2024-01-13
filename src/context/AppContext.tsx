import React, { useState } from "react";
import { search } from "../api";
import { NasaImageCollection } from "../entities";

interface IAppContext {
  data: NasaImageCollection[];
  updateData: (
    searchTerm: string,
    startDate?: Number,
    endDate?: Number
  ) => void;
  loading: boolean;
  error: string | null;
}
interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<NasaImageCollection[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const updateData = async (
    searchTerm: string,
    startDate?: Number,
    endDate?: Number
  ) => {
    try {
      setLoading(true);
      setError(null);
      const data = await search(searchTerm, startDate, endDate);

      if (data.length === 0) {
        setError(`No data for ${searchTerm}`);
      } else {
        setData(data);
      }
    } catch (error) {
      setError("Error getting data");
    }
    setLoading(false);
  };

  return (
    <AppContext.Provider value={{ data, updateData, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
