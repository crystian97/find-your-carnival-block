import React from "react";
import {
  ButtonSelect,
  ButtonSelectLayout,
  ContentContainer,
  ContentHeader,
  ContentWrapper,
} from "./styles";

export default function Content() {
  return (
    <ContentWrapper>
      <ContentContainer>
        <ContentHeader>
          <h1>Blocos recomendados</h1>
          <ButtonSelect>
            <ButtonSelectLayout>Lista</ButtonSelectLayout>
            <ButtonSelectLayout disabled>Mapa</ButtonSelectLayout>
          </ButtonSelect>
        </ContentHeader>
      </ContentContainer>
    </ContentWrapper>
  );
}
