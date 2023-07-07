import Stack from "react-bootstrap/Stack";
import {
  ResultContent,
  ResultImage,
  ResultJumbotron,
  ResultDetail,
  VerticalLine,
} from "./ResultElements";
import save from "../../images/save.png";
import share from "../../images/share.png";
import sun from "../../images/sun.png";
import star from "../../images/star.png";
import { Col, Row } from "react-bootstrap";
import Search from "../Search/Search";
import "./Result.css";

const Result = () => {
  return (
    <>
      <Stack
        direction="horizontal"
        className="col-md-5 mx-auto mt-5 container-result"
        gap={2}
      >
        <ResultContent className="mx-auto mt-4">
          <Search />
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
            {/* Data 1 */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <ResultImage>
              <ResultDetail className="text-white">
                <p className="mb-1">Kekel Aba Rafi</p>
                <Stack direction="horizontal">
                  <img src={star} alt="Logo GO" />
                  <div className="p-2 fw-bold">4.7</div>
                </Stack>
              </ResultDetail>
            </ResultImage>
            {/* Data 2 */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <ResultImage>
              <ResultDetail className="text-white">
                <p className="mb-1">Kekel Aba Rafi</p>
                <Stack direction="horizontal">
                  <img src={star} alt="Logo GO" />
                  <div className="p-2 fw-bold">4.7</div>
                </Stack>
              </ResultDetail>
            </ResultImage>
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
            <ResultImage>
              <ResultDetail className="text-white">
                <p className="mb-1">Kekel Aba Rafi</p>
                <Stack direction="horizontal">
                  <img src={star} alt="Logo GO" />
                  <div className="p-2 fw-bold">4.7</div>
                </Stack>
              </ResultDetail>
            </ResultImage>
            {/* End Loop Result */}
          </VerticalLine>
        </ResultContent>
      </Stack>
    </>
  );
};

export default Result;
