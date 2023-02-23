import React, { createContext, useState } from "react";

export const CarnivalBlocksContext = createContext();

export const CarnivalBlocksContextProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);

  return (
    <CarnivalBlocksContext.Provider value={{ blocks, setBlocks }}>
      {children}
    </CarnivalBlocksContext.Provider>
  );
};
