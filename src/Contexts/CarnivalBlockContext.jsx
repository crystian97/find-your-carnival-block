import React, { createContext, useState } from "react";
import { api } from "../libs/api/axios";

export const CarnivalBlocksContext = createContext();

export const CarnivalBlocksContextProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  const [locations, setLocations] = useState([]);
  function getLocations() {
    const l = [];
    blocks.map((block) => {
      l.includes(block.localization) == false ? l.push(block.localization) : "";
    });
    setLocations(l);
  }
  async function getBlocks() {
    await api.get("/carnival-blocks").then((response) => {
      const b = response.data;
      setBlocks(b);
    });
  }

  return (
    <CarnivalBlocksContext.Provider
      value={{
        setBlocks,
        getBlocks,

        getLocations: getLocations,
        blocks,
        locations,
      }}
    >
      {children}
    </CarnivalBlocksContext.Provider>
  );
};
