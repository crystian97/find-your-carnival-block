import { MapPin } from "phosphor-react";
import React from "react";
import {
  ButtonSelect,
  ButtonSelectLayout,
  Card,
  CardBody,
  CardFooter,
  CardImageHeader,
  ContentContainer,
  ContentHeader,
  ContentWrapper,
  ListBlocksCarnival,
} from "./styles";

export default function Content({ blocks }) {
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
        <ListBlocksCarnival>
          {blocks.map((block) => (
            <Card key={block.id}>
              <CardImageHeader src={block.imgUrl} />
              <CardBody>
                <h1>{block.name}</h1>
                <p>{block.description}</p>
              </CardBody>
              <CardFooter>
                <MapPin size={21} /> <span>{block.localization}</span>
              </CardFooter>
            </Card>
          ))}
        </ListBlocksCarnival>
      </ContentContainer>
    </ContentWrapper>
  );
}
