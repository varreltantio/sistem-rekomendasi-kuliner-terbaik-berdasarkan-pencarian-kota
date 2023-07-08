import Stack from "react-bootstrap/Stack";
import { ResultContent } from "./ResultElements";
import Search from "../Search/Search";
import "./Result.css";
import ResultJumbotron from "../ResultJumbotron/ResultJumbotron";
import ResultDetail from "../ResultDetail/ResultDetail";

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
          <ResultJumbotron />
          <ResultDetail />
        </ResultContent>
      </Stack>
    </>
  );
};

export default Result;
