import React from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Content />
    </HomeContainer>
  );
};

export default Home;
