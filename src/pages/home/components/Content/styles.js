import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["white"]};
  padding: 100px 112px 112px;
`;
export const ContentContainer = styled.main`
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const ContentHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const ButtonSelect = styled.div`
  width: 190px;
  height: 48px;
  align-items: center;
  display: flex;
  border: 1px solid ${(props) => props.theme["gray-200"]};
  padding: 8px;
  border-radius: 6px;
`;
export const ButtonSelectLayout = styled.button`
  background-color: ${(props) => props.theme["primary"]};
  color: ${(props) => props.theme["white"]};
  width: 86px;
  height: 32px;
  border-radius: 5px;
  font-weight: bold;
  padding: 4px 24px;
  text-transform: uppercase;
  border: 0;
  :hover {
    cursor: pointer;
  }
  :disabled {
    background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["primary"]};
    cursor: not-allowed;
  }
`;
export const ListBlocksCarnival = styled.main`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 323px;
  padding: 16px;
  border-radius: 10px;
  gap: 16px;
  overflow: hidden;
`;

export const CardImageHeader = styled.img`
  width: 384px;
  height: 153px;
  z-index: 3;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    color: ${(props) => props.theme["text"]};
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme["text"]};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 8px;
  svg {
    color: ${(props) => props.theme["red"]};
  }
`;
