import styled from "styled-components";

export const CardView = styled.div`
  background: var(--background);
  border-radius: 5px;
  border: solid 1px var(--card-border);
  width: 10em;
`;
export const Title = styled.h2`
  text-align: center;
  color: var(--white);
`;
export const Figure = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  height: 100px;
`;

export const MonitorLabel = styled.div`
  border-top: solid 1px var(--card-border);
  text-align: center;
  font-family: "Mohave", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: var(--green);
`;
