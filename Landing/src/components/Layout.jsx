import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../imgs/logo-goa-mma.png";
import Footer from "./Footer";
const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
  color: white;
  position: fixed;
  padding: 0 0 0 2em;
  top: 100px;
  left: 0;
  transition: top 0.3s;
  z-index: 1000;
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
  padding: 0 0 1rem 0;
  border-bottom: 2px solid grey;

  &:hover {
    color: white;
    border-bottom: 2px solid white;
  }
`;

export const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer style={{ top: showNavbar ? "-50px" : "0" }}>
        <NavbarContainer>
          <LogoGoaNav src={logo} />
          <Linkk to="/">Inscribirse</Linkk>
          {/* <StyledLink href="#about">Acerca de</StyledLink> */}
          <Linkk to="servicios">Servicios</Linkk>
          <Linkk to="contacto">Contacto</Linkk>
        </NavbarContainer>
      </HeaderContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
