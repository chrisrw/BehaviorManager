import axios from 'axios';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Infraction {
  student_name: string;
  student_number: string;
  date: any;
  period: string;
  incident_description: string;
}

interface InfractionsContextProps {
  shouldRefresh: boolean;
  infractions: Infraction[];
  refreshInfractions: () => void;
  resetRefreshFlag: () => void;
  fetchInfractions: () => void;
}

const InfractionsContext = createContext<InfractionsContextProps>({
  shouldRefresh: false,
  infractions: [],
  refreshInfractions: () => {},
  resetRefreshFlag: () => {},
  fetchInfractions: () => {},
});

interface InfractionsProviderProps {
  children: ReactNode;
}

export const InfractionsProvider: React.FC<InfractionsProviderProps> = ({ children }) => {
  const [shouldRefresh, setShouldRefresh] = useState<boolean>(false);
  const [infractions, setInfractions] = useState<Infraction[]>([]);


  const fetchInfractions = () => {
    axios
      .get<Infraction[]>('http://localhost:3001/data')
      .then(response => {
        setInfractions(response.data);
      })
      .catch(error => {
        console.error('Error fetching infractions:', error);
      });
  };

  useEffect(() => {
    fetchInfractions();
  }, []);

  const refreshInfractions = () => {
    setShouldRefresh(true);
  };

  const resetRefreshFlag = () => {
    setShouldRefresh(false);
  };

  return (
    <InfractionsContext.Provider value={{ shouldRefresh, refreshInfractions, resetRefreshFlag, infractions, fetchInfractions }}>
      {children}
    </InfractionsContext.Provider>
  );
};

export const useInfractionsContext = (): InfractionsContextProps => {
  const context = useContext(InfractionsContext);
  if (!context) {
    throw new Error('useInfractionsContext must be used within an InfractionsProvider');
  }
  return context;
};


