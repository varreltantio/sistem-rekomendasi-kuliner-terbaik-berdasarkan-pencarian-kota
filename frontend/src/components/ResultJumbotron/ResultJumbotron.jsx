import { ContainerJumbotron } from "./ResultJumbotronElements";
import bgJumbotron from "../../images/bg-jumbotron.png";
import save from "../../images/save.png";
import share from "../../images/share.png";
import { Col, Row } from "react-bootstrap";

const ResultJumbotron = () => {
  return (
    <>
      <ContainerJumbotron style={{ backgroundImage: `url(${bgJumbotron})` }}>
        <h1 className="text-center pt-4">Jember, Jawa Timur</h1>
        <Row>
          <Col className="text-end">
            {" "}
            <img src={save} alt="" srcset="" />
            Save
          </Col>
          <Col>
            <img src={share} alt="" srcset="" />
            Share
          </Col>
        </Row>
      </ContainerJumbotron>
    </>
  );
};

export default ResultJumbotron;
