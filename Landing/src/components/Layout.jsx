import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../imgs/logo-goa-mma.png";
import Footer from "./Footer";
const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
  color: white;
  padding: 0 0 0 2em;
`;

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const LogoGoaNav = styled.img`
  width: 60px;
`;

const Linkk = styled(Link)`
  font-weight: 500;
  color: grey;
  text-decoration: inherit;
  border-bottom: 2px solid grey;
  transition: .2s;
  &:hover {
    color: white;
    border-bottom: 2px solid red;
    padding: 0 0 .2rem 0;
    filter: drop-shadow(1px 1px 1px red)

  }
`;

export const Layout = () => {
  // const [showNavbar, setShowNavbar] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowNavbar(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // style={{ top: showNavbar ? "-50px" : "0" }}
  return (
    <>
      <HeaderContainer >
        <NavbarContainer>
          <LogoGoaNav src={logo} />
          <Linkk to="/">Inscribirse</Linkk>
          <Linkk to="servicios">Servicios</Linkk>
          <Linkk to="dojos">Dojos</Linkk>
        </NavbarContainer>
      </HeaderContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
