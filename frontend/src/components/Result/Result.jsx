import Stack from "react-bootstrap/Stack";
import { ResultContent } from "./ResultElements";
import Search from "../Search/Search";
import "./Result.css";
import ResultJumbotron from "../ResultJumbotron/ResultJumbotron";
import ResultDetail from "../ResultDetail/ResultDetail";

const Result = ({ setCity, searchFood, data }) => {
  return (
    <>
      <Stack
        direction="horizontal"
        className="col-md-5 mx-auto mt-5 container-result"
        gap={2}
      >
        <ResultContent className="mx-auto mt-4">
          <Search setCity={setCity} searchFood={searchFood} />
          <p className="text-white text-center">
            Didn’t find what you were{" "}
            <span className="text-warning">looking</span> for?
          </p>
          <ResultJumbotron data={data} />
          <ResultDetail data={data} />
        </ResultContent>
      </Stack>
    </>
  );
};

export default Result;
