import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const navigateToResults = () => {
    // 👇️ navigate to /contacts
    navigate("/result");
  };
  return (
    <>
      <p className="text-center" style={{ color: "#F4B511" }}>
        Here’s some suggestions!
      </p>
      <Stack direction="horizontal" className="col-md-8 mx-auto" gap={2}>
        <div className="p-2">
          <Button variant="outline-secondary" onClick={navigateToResults}>
            Vegetarian
          </Button>{" "}
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
    </>
  );
};

export default Category;
