import styled from "styled-components";

export const HeroContainer = styled.header`
  display: flex;
  max-width: 100%;
`;

export const SubTitle = styled.sub`
  font-size: 16px;
  color: ${(props) => props.theme["icons"]};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: ${(props) => props.theme["text"]};
  line-height: 125%;
  text-align: center;
  font-size: 48px;
  strong {
    color: ${(props) => props.theme["primary"]};
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 100px 0px;
  font-weight: 500;
`;
export const ContentSearch = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 40px;
  gap: 24px;
  margin-top: 40px;
  background-color: ${(props) => props.theme["white"]};
  height: 128px;
  align-items: center;
`;
export const InputSearch = styled.div`
  width: 348px;
  height: 48px;
  display: flex;

  input,
  select {
    width: 100%;
    display: flex;
    background-color: ${(props) => props.theme["gray-300 "]};
    padding-left: 50px;
    color: ${(props) => props.theme["gray-500"]};
    background-color: ${(props) => props.theme["gray-200"]};
    border-radius: 5px;
    border: none;
  }
  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
  svg {
    position: absolute;
    /* topo | direita | inferior | esquerda */
    color: ${(props) => props.theme["icons"]};
    margin: 12px 0px 12px 14px;
  }
`;
export const IlustraOne = styled.img`
  display: flex;
  align-self: flex-start;
`;
export const IlustraTwo = styled.img`
  display: flex;
  align-self: flex-end;
`;
