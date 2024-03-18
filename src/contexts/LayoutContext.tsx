import { createContext, useContext, useState, ReactNode } from "react";

interface LayoutContextType {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  pageTitle: string;
  setPageTitle: (label: string) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState('Início');

  const setLoading = (value: boolean): void => {
    setIsLoading(value);
  };

  const contextValue: LayoutContextType = {
    isLoading,
    setLoading,
    pageTitle,
    setPageTitle,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};