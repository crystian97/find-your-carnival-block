import React, { useEffect, useState } from "react";
import { api } from "../../libs/api/axios";
import Content from "./components/Content";
import Hero from "./components/Hero";
import { HomeContainer } from "./styles";

const Home = () => {
  async function getBlocks() {
    await api.get("/carnival-blocks").then((response) => {
      const b = response.data;
      setBlocks(b);
    });
  }
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    getBlocks();
  }, []);
  console.log(blocks);
  return (
    <HomeContainer>
      <Hero />
      <Content blocks={blocks} />
    </HomeContainer>
  );
};

export default Home;
