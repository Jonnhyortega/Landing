import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../imgs/logo-goa-mma.png';

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
  color: white;
  position: fixed;
  top: -50px;
  left: 0;
  transition: top 0.3s;
  z-index: 1000;
`;

const NavbarContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DivLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  background-color: black;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.25s;
  padding: 1em;
  &:hover {
    border-color: white;
  }
`;

const DivRight = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1em 0 0;
`;

const LogoGoaNav = styled.img`
  width: 70px;
`;

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer style={{ top: showNavbar ? '0' : '-50px' }}>
      <NavbarContainer>
        <DivLeft>
          <NavLink href="#home">Empezar a entrenar</NavLink>
          <NavLink href="#about">Acerca de</NavLink>
          <NavLink href="#services">Servicios</NavLink>
          <NavLink href="#contact">Contacto</NavLink>
        </DivLeft>
        <DivRight>
          <LogoGoaNav src={logo} />
        </DivRight>
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Header;
