import { MagnifyingGlass, MapPin, MapPinLine } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import Ilustra1 from "../../../../assets/img/ilustra-01.png";
import Ilustra2 from "../../../../assets/img/ilustra-02.png";
import { CarnivalBlocksContext } from "../../../../Contexts/CarnivalBlockContext";
import { api } from "../../../../libs/api/axios";

import {
  Content,
  ContentSearch,
  HeroContainer,
  IlustraOne,
  IlustraTwo,
  InputSearch,
  SearchNowButton,
  SubTitle,
  Title,
} from "./styles";
export default function Hero() {
  const { blocks, setBlocks } = useContext(CarnivalBlocksContext);
  const [searchQuery, setSearchQuery] = useState("");
  function Search() {
    SearchBlocks(searchQuery);
  }
  async function SearchBlocks(q) {
    await api
      .get("/carnival-blocks", {
        params: {
          q,
        },
      })
      .then((response) => {
        const b = response.data;
        setBlocks(b);
      });
  }

  return (
    <HeroContainer>
      <IlustraOne src={Ilustra1} />
      <Content>
        <SubTitle>find your block</SubTitle>
        <Title>
          Encontre os <strong> melhores blocos </strong> <br /> de carnaval de
          2023
        </Title>
        <ContentSearch>
          <InputSearch>
            <MagnifyingGlass size={24} />
            <input
              type="text"
              onChange={(event) => {
                setSearchQuery(event.target.value);
              }}
            />
          </InputSearch>
          <InputSearch>
            <MapPin size={24} />
            <select name="" id=""></select>
          </InputSearch>
          <SearchNowButton onClick={Search}>Buscar Agora</SearchNowButton>
        </ContentSearch>
      </Content>
      <IlustraTwo src={Ilustra2} />
    </HeroContainer>
  );
}
