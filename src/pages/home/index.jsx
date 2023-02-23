import React, { useContext, useEffect, useState } from "react";
import { CarnivalBlocksContext } from "../../Contexts/CarnivalBlockContext";
import { api } from "../../libs/api/axios";
import Content from "./components/Content";

import Hero from "./components/Hero";
import { HomeContainer } from "./styles";

const Home = () => {
  const { blocks, getBlocks } = useContext(CarnivalBlocksContext);
  useEffect(() => {
    getBlocks();
  }, []);
  return (
    <HomeContainer>
      <Hero />
      <Content blocks={blocks} />
    </HomeContainer>
  );
};

export default Home;
