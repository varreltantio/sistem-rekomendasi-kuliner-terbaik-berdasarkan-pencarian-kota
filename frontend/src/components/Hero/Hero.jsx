import React, { useState } from "react";
import NavbarCustom from "../NavbarCustom/NavbarCustom";
import { HeroContainer } from "./HeroElements";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Result from "../Result/Result";
import axios from "axios";

const Hero = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({city: "", foods: [], places: []});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const searchFood = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    await axios
      .post(process.env.REACT_APP_BACKEND_URL, {
        city,
      })
      .then((response) => {
        setData(response.data);
        navigate("/result");
      })
      .catch((error) => setError(error.message));

    setLoading(false);
  };

  const location = useLocation();

  return (
    <HeroContainer>
      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )} 

      <NavbarCustom />

      {location.pathname === "/" && <Home setCity={setCity} searchFood={searchFood} error={error} />}
      {location.pathname === "/result" && <Result setCity={setCity} searchFood={searchFood} data={data} />}
    </HeroContainer>
  );
};

export default Hero;
