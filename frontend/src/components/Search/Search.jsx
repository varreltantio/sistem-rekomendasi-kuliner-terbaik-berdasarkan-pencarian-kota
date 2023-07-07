import "./Search.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import logoGo from "../../images/go.png";
import { useState } from "react";
import Category from "../Category/Category";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();

  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };
  return (
    <>
      <form
        className="mb-3 ms-4"
        onSubmit={handleSubmit}
        style={{ position: "relative" }}
      >
        {/* When url in the Home */}
        {location.pathname === "/" && (
          <>
            <Form.Control
              placeholder="Search for a place..."
              aria-label="Search for a place..."
              aria-describedby="basic-addon2"
              id="inputSearch1"
            />
            <Button
              variant="outline-secondary"
              type="submit"
              id="button-addon1"
              style={{ height: "3.3rem" }}
            >
              <Stack direction="horizontal">
                <div className="p-2 fw-bold">GO</div>
                <img src={logoGo} alt="Logo GO" />
              </Stack>
            </Button>
          </>
        )}
        {/* End Home */}

        {/* When url in the Result */}
        {location.pathname === "/result" && (
          <>
            <Form.Control
              placeholder="Search for a place..."
              aria-label="Search for a place..."
              aria-describedby="basic-addon2"
              id="inputSearch2"
            />
            <Button
              variant="outline-secondary"
              type="submit"
              id="button-addon2"
              style={{ height: "3.3rem" }}
            >
              <Stack direction="horizontal">
                <div className="p-2 fw-bold">GO</div>
                <img src={logoGo} alt="Logo GO" />
              </Stack>
            </Button>
          </>
        )}
        {/* End Result */}
      </form>
      {showResults ? <Category /> : null}
    </>
  );
};

export default Search;
