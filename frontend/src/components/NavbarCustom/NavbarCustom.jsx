import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarCustomElements";
import Image from "react-bootstrap/Image";
import bgImage from "../../images/logo.png";

function NavbarCustom({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Image src={bgImage} rounded />
        </NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default NavbarCustom;
