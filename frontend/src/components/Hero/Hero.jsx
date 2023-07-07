import React, { useState } from "react";
import NavbarCustom from "../NavbarCustom/NavbarCustom";
import { HeroContainer } from "./HeroElements";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Result from "../Result/Result";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <HeroContainer>
      <NavbarCustom toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {location.pathname === "/" && <Home />}
      {location.pathname === "/result" && <Result />}
    </HeroContainer>
  );
};

export default Hero;
