import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Stack from "react-bootstrap/Stack";
import { ResultContent, ResultJumbotron, VerticalLine } from "./ResultElements";
import logoGo from "../../images/go.png";
import save from "../../images/save.png";
import share from "../../images/share.png";
import sun from "../../images/sun.png";
import image from "../../images/image.png";
import { Col, Row } from "react-bootstrap";

const Result = () => {
  return (
    <>
      <Stack
        direction="horizontal"
        className="col-md-5 mx-auto mt-5"
        style={{ backgroundColor: "rgba(23, 32, 43, 1)", width: "646px" }}
        gap={2}
      >
        <ResultContent className="mx-auto mt-4">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search for a place..."
              aria-label="Search for a place..."
              aria-describedby="basic-addon2"
              id="inputSearch"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{
                backgroundColor: "rgba(77, 84, 93, 1)",
                color: "rgba(50, 58, 70, 1)",
              }}
            >
              <Stack direction="horizontal">
                <div className="p-2 fw-bold">GO</div>
                <img src={logoGo} alt="Logo GO" />
              </Stack>
            </Button>
          </InputGroup>
          <p className="text-white text-center">
            Didn’t find what you were{" "}
            <span className="text-warning">looking</span> for?
          </p>
          <ResultJumbotron>
            <h1 className="text-center text-white pt-4">Jember, Jawa Timur</h1>
            <Row className="text-white">
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
          </ResultJumbotron>
          {/* Loop Result Category */}
          <Stack direction="horizontal" className="mt-3">
            <img src={sun} alt="Logo GO" />
            <div className="p-2 fw-bold text-warning">MORNING</div>
          </Stack>
          <VerticalLine>
            {/* Loop Result */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <img src={image} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <img src={image} alt="" />
            {/* End Loop Result */}
          </VerticalLine>
          <Stack direction="horizontal" className="mt-3">
            <img src={sun} alt="Logo GO" />
            <div className="p-2 fw-bold text-warning">AFTERNOON</div>
          </Stack>
          <VerticalLine>
            {/* Loop Result */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <img src={image} alt="" />
            {/* End Loop Result */}
          </VerticalLine>
        </ResultContent>
      </Stack>
    </>
  );
};

export default Result;
