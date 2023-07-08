import { ContainerJumbotron } from "./ResultJumbotronElements";
import bgJumbotron from "../../images/bg-jumbotron.png";

const ResultJumbotron = ({ data }) => {
  return (
    <>
      <ContainerJumbotron style={{ backgroundImage: `url(${bgJumbotron})` }}>
        <h1 className="text-center pt-5">{data.city}</h1>
      </ContainerJumbotron>
    </>
  );
};

export default ResultJumbotron;
