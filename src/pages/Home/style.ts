import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const Options = styled.div`
  width: 20%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
