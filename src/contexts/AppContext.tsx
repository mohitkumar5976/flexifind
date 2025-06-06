import React, { createContext, useState, useMemo, type ReactNode } from "react";
import type { Movie } from "../types/Movie";

// Define the shape of your context state and actions
interface AppContextType {
  search: Movie[];
  setSearch: React.Dispatch<React.SetStateAction<Movie[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Define your User type as needed
interface User {
  id: string;
  name: string;
  email: string;
  // add other user fields here
}

// Default context value
const defaultContext: AppContextType = {
  search: [],
  setSearch: () => {},
  loading: false,
  setLoading: () => {},
  user: null,
  setUser: () => {},
};

// Create context
export const AppContext = createContext<AppContextType>(defaultContext);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo(
    () => ({
      search,
      setSearch,
      loading,
      setLoading,
      user,
      setUser,
    }),
    [search, loading, user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
