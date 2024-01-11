import { Moment } from "moment";
import React, { Dispatch, SetStateAction, useState } from "react";

interface IAppContext {
  data: any[];
  updateData: (searchTerm: string, startDate: Moment, endDate: Moment) => void;
  isLoading: boolean;
}
interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const updateData = (
    searchTerm: string,
    startDate: Moment,
    endDate: Moment
  ) => {
    console.log(searchTerm, startDate, endDate);
    setData([]);
  };

  return (
    <AppContext.Provider value={{ data, updateData, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
