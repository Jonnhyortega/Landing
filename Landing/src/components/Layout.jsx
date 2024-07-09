import { Outlet, Link, useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import logo from "../imgs/logo-goa-mma.png";
import Footer from "./Footer";

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
  color: white;
  padding: 0 0 0 2em;
  display: flex;
  align-items: center;
  gap: 1em;
  border-bottom: 1px solid black;
  &:hover {
    border-bottom: 1px solid grey;
    filter: drop-shadow(1px 1px 1px grey)
  }
`;

const LogoGoaNav = styled.img`
  width: 60px;
`;

const Linkk = styled(Link)`
  font-weight: 500;
  color: grey;
  text-decoration: inherit;
  border-bottom: 2px solid grey;
  &:hover {
    color: white;
    border-bottom: 2px solid red;
    filter: drop-shadow(1px 1px 1px red);
  }
  ${(props) =>
    props.active &&
    `
    color: white;
    border-bottom: 2px solid red;
    filter: drop-shadow(1px 1px 1px red);
  `}
`;

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <HeaderContainer>
        <LogoGoaNav src={logo} />
        <Linkk to="/" active={location.pathname === "/"}>
          Inscribirse
        </Linkk>
        <Linkk to="/servicios" active={location.pathname === "/servicios"}>
          Servicios
        </Linkk>
        <Linkk to="/dojos" active={location.pathname === "/dojos"}>
          Dojos
        </Linkk>
      </HeaderContainer>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
