import logoGo from "../../images/go.png";
import { HeroContent, HeroH1, RecentSearch } from "./HomeElements";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Stack from "react-bootstrap/Stack";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Stack direction="horizontal" className="col-md-5 mx-auto" gap={2}>
        <HeroContent>
          <HeroH1>KULINER.ID</HeroH1>
          <p className="text-center" style={{ color: "#fff" }}>
            Pick A Place!
          </p>
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
                backgroundColor: "rgba(244, 181, 17, 1)",
                color: "rgba(50, 58, 70, 1)",
              }}
            >
              <Stack direction="horizontal">
                <div className="p-2 fw-bold">GO</div>
                <img src={logoGo} alt="Logo GO" />
              </Stack>
            </Button>
          </InputGroup>
          <p className="text-center" style={{ color: "#F4B511" }}>
            Here’s some suggestions!
          </p>
          <Stack direction="horizontal" className="col-md-9 mx-auto" gap={2}>
            <div className="p-2">
              <Button variant="outline-secondary">Vegetarian</Button>{" "}
            </div>
            <div className="p-2">
              <Button variant="outline-secondary">Meat</Button>{" "}
            </div>
            <div className="p-2">
              <Button variant="outline-secondary">Exclusive</Button>{" "}
            </div>
          </Stack>
          <Stack direction="horizontal" className="col-md-8 mx-auto" gap={2}>
            <div className="p-2">
              <Button variant="outline-secondary">Outdoor Restaurant</Button>{" "}
            </div>
            <div className="p-2">
              <Button variant="outline-secondary">Drinks</Button>{" "}
            </div>
          </Stack>
        </HeroContent>
      </Stack>
      <RecentSearch>
        <p>RecentSearch</p>
        <Stack
          direction="horizontal"
          style={{ color: "rgba(255, 255, 255, 0.5)", fonSize: "200px" }}
          gap={5}
        >
          <div className="p-2">Jakarta</div>
          <div className="p-2">Surabaya</div>
          <div className="p-2">Yogyakarta</div>
          <div className="p-2">Jember</div>
          <div className="p-2">Malang</div>
          <div className="p-2">Bandung</div>
          <div className="p-2">Bali</div>
          <div className="p-2">Bogor</div>
          <div className="p-2">Papua</div>
          <div className="p-2">Maluku</div>
          <div className="p-2">Aceh</div>
        </Stack>
      </RecentSearch>
    </>
  );
};

export default Home;
