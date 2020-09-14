import React, { useContext, useState, createContext } from "react";

const HeaderContext = createContext();

export default function ContextProvider({ children }) {
  const [state, setState] = useState(0);
  return (
    <HeaderContext.Provider value={{ state, setState }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  const { state, setState } = context;
  return { state, setState };
}
