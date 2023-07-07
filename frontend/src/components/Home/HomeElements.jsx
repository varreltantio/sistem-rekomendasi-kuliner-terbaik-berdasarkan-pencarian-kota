import { styled } from "styled-components";

export const HeroContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  /* width: 100vw; */
  padding: 0rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 650px) {
    margin-top: 5rem;
  }
`;

export const HeroH1 = styled.h1`
  text-transform: uppercase;
  font-size: clamp(2.5rem, 10vw, 5rem);
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const RecentSearch = styled.div`
  margin-top: 5rem;
  text-align: center;
  color: #fff;
`;
