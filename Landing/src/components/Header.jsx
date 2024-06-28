import styled from "styled-components";
import logo from "../imgs/logo-goa-mma.png";
const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;
const DivLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-bottom: 1px solid white;
  position: fixed;
`;
const DivRight = styled.div``;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  padding: 1em;
  &:hover {
  }
`;

const LogoGoaNav = styled.img`
  margin-left: 100px;
  width: 70px;
  border-radius: 10px;
`;

const Header = () => (
  <HeaderContainer>
    <NavbarContainer>
      <DivLeft>
        <NavLink href="#home">Empezar a entrenar</NavLink>
        <NavLink href="#about">Acerca de</NavLink>
        <NavLink href="#services">Servicios</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
        <LogoGoaNav src={logo}></LogoGoaNav>
      </DivLeft>
      <DivRight></DivRight>
    </NavbarContainer>
  </HeaderContainer>
);

export default Header;
