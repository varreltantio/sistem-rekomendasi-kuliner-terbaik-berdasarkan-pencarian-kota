import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaAlignJustify } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: left;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  padding: 40px;
  margin-top: 2rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 50px;
  right: 40px;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaAlignJustify)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
