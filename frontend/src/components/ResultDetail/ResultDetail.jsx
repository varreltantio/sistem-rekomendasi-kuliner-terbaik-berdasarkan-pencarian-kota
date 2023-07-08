import sun from "../../images/sun.png";
import star from "../../images/star.png";
import image from "../../images/image.png";
import Stack from "react-bootstrap/Stack";
import { ResultImage, ResultItem, VerticalLine } from "./ResultDetailElements";

const ResultDetail = () => {
  return (
    <>
      {/* Loop Result Category */}
      <Stack direction="horizontal" className="mt-3">
        <img src={sun} alt="Logo GO" />
        <div className="p-2 fw-bold text-warning">MORNING</div>
      </Stack>
      <VerticalLine>
        {/* Loop Result */}
        {/* Data 1 */}
        <div className="ps-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
          <ResultImage className="mb-5">
            <img src={image} alt="image1" id="imageResult" />
            <ResultItem className="text-white">
              <p className="mb-1">Kekel Aba Rafi</p>
              <Stack direction="horizontal">
                <img src={star} alt="Logo GO" />
                <div className="p-2 fw-bold">4.7</div>
              </Stack>
            </ResultItem>
          </ResultImage>
        </div>
        {/* Data 2 */}
        <div className="ps-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
          <ResultImage className="mb-5">
            <img src={image} alt="image2" id="imageResult" />
            <ResultItem className="text-white">
              <p className="mb-1">Kekel Aba Rafi</p>
              <Stack direction="horizontal">
                <img src={star} alt="Logo GO" />
                <div className="p-2 fw-bold">4.7</div>
              </Stack>
            </ResultItem>
          </ResultImage>
        </div>
        {/* End Loop Result */}
      </VerticalLine>
      <Stack direction="horizontal" className="mt-3">
        <img src={sun} alt="Logo GO" />
        <div className="p-2 fw-bold text-warning">AFTERNOON</div>
      </Stack>
      <VerticalLine>
        {/* Loop Result */}
        <div className="ps-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt utet dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
          <ResultImage className="mb-5">
            <img src={image} alt="image3" id="imageResult" />
            <ResultItem className="text-white">
              <p className="mb-1">Kekel Aba Rafi</p>
              <Stack direction="horizontal">
                <img src={star} alt="Logo GO" />
                <div className="p-2 fw-bold">4.7</div>
              </Stack>
            </ResultItem>
          </ResultImage>
        </div>
        {/* End Loop Result */}
      </VerticalLine>
    </>
  );
};

export default ResultDetail;
