import { MagnifyingGlass, MapPin, MapPinLine } from "phosphor-react";
import React from "react";
import Ilustra1 from "../../../../assets/img/ilustra-01.png";
import Ilustra2 from "../../../../assets/img/ilustra-02.png";

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
            <input type="text" />
          </InputSearch>
          <InputSearch>
            <MapPin size={24} />
            <select name="" id=""></select>
          </InputSearch>
          <SearchNowButton>Buscar Agora</SearchNowButton>
        </ContentSearch>
      </Content>
      <IlustraTwo src={Ilustra2} />
    </HeroContainer>
  );
}
