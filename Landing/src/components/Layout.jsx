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
  display: flex;
  align-items: center;
  gap: 1em;
  border-bottom: 1px solid;
  &:hover{
  border-bottom: 1px solid red;
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
    filter: drop-shadow(1px 1px 1px red)

  }
`;

export const Layout = () => {
 
  return (
    <>
      <HeaderContainer >
          <LogoGoaNav src={logo} />
          <Linkk to="/">Inscribirse</Linkk>
          <Linkk to="servicios">Servicios</Linkk>
          <Linkk to="dojos">Dojos</Linkk>
      </HeaderContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
