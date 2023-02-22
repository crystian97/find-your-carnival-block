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
        <ListBlocksCarnival>
          <Card>
            <CardImageHeader src="https://images.unsplash.com/photo-1639456146075-b35c160d13c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzAwMjEwNw&ixlib=rb-4.0.3&q=80&w=1080" />
            <CardBody>
              <h1>O Python do vovô não sobe mais</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </CardBody>
            <CardFooter>
              <MapPin size={21} /> <span>São Paulo - SP</span>
            </CardFooter>
          </Card>
          <Card>
            <CardImageHeader src="https://images.unsplash.com/photo-1639456146075-b35c160d13c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzAwMjEwNw&ixlib=rb-4.0.3&q=80&w=1080" />
            <CardBody>
              <h1>O Python do vovô não sobe mais</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </CardBody>
            <CardFooter>
              <MapPin size={21} /> <span>São Paulo - SP</span>
            </CardFooter>
          </Card>
          <Card>
            <CardImageHeader src="https://images.unsplash.com/photo-1639456146075-b35c160d13c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzAwMjEwNw&ixlib=rb-4.0.3&q=80&w=1080" />
            <CardBody>
              <h1>O Python do vovô não sobe mais</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </CardBody>
            <CardFooter>
              <MapPin size={21} /> <span>São Paulo - SP</span>
            </CardFooter>
          </Card>
          <Card>
            <CardImageHeader src="https://images.unsplash.com/photo-1639456146075-b35c160d13c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzAwMjEwNw&ixlib=rb-4.0.3&q=80&w=1080" />
            <CardBody>
              <h1>O Python do vovô não sobe mais</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </CardBody>
            <CardFooter>
              <MapPin size={21} /> <span>São Paulo - SP</span>
            </CardFooter>
          </Card>
          <Card>
            <CardImageHeader src="https://images.unsplash.com/photo-1639456146075-b35c160d13c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzAwMjEwNw&ixlib=rb-4.0.3&q=80&w=1080" />
            <CardBody>
              <h1>O Python do vovô não sobe mais</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </CardBody>
            <CardFooter>
              <MapPin size={21} /> <span>São Paulo - SP</span>
            </CardFooter>
          </Card>
          <Card>
            <CardImageHeader src="https://images.unsplash.com/photo-1639456146075-b35c160d13c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzAwMjEwNw&ixlib=rb-4.0.3&q=80&w=1080" />
            <CardBody>
              <h1>O Python do vovô não sobe mais</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </CardBody>
            <CardFooter>
              <MapPin size={21} /> <span>São Paulo - SP</span>
            </CardFooter>
          </Card>
        </ListBlocksCarnival>
      </ContentContainer>
    </ContentWrapper>
  );
}
