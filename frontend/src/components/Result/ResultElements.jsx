import { styled } from "styled-components";
import bgJumbotron from "../../images/bg-jumbotron.png";
import image from "../../images/image.png";

export const ResultJumbotron = styled.div`
  background: url(${bgJumbotron});
  background-position: center;
  width: 646px;
  height: 150px;
`;

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

export const VerticalLine = styled.div`
  color: #fff;
  border-left: 3px dashed rgba(244, 181, 17, 0.63);
  margin-left: 1.1rem;
`;

export const ResultImage = styled.div`
  position: relative;
  background: url(${image});
  width: 302.5px;
  height: 268px;
`;
export const ResultDetail = styled.div`
  position: absolute;
  padding: 20px;
  font-size: 24px;
  bottom: 8px;
  left: 16px;
`;
