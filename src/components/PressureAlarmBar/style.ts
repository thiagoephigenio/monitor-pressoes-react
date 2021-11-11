import styled from "styled-components";

export const Title = styled.h1`
  color: var(--white);
`;

export const Paragraph = styled.div`
  height: 3px;
  background: var(--purple-gradient-bar);
`;

export const Alarms = styled.ul`
  > li {
    font-size: 87%;
    color: var(--green);
    padding-bottom: 5px;
  }
`;

export const ButtonList = styled.div`
  > a {
    color: var(--white);
    background: var(--primary);
    display: block;
    text-align: center;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 100%;
    border-radius: 5px;

    transition: all 0.3s ease-in;

    &:hover {
      background: var(--primary-hover);
    }
  }
`;
