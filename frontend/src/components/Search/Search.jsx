import "./Search.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import logoGo from "../../images/go.png";
import { useLocation } from "react-router-dom";

const Search = ({ setCity, searchFood }) => {
  const location = useLocation();

  return (
    <>
      <form
        className="mb-3 ms-4"
        onSubmit={searchFood}
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
              onChange={(e) => setCity(e.target.value)}
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
              onChange={(e) => setCity(e.target.value)}
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
    </>
  );
};

export default Search;
