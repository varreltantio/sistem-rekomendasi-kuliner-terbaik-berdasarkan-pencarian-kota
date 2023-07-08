import { styled } from "styled-components";

export const ResultContent = styled.div`
  max-height: 100%;
  /* width: 100vw; */
  overflow: auto;
  overflow-x: hidden;
  height: 450px;
  padding: 0rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 650px) {
    margin-top: 5rem;
  }
`;
