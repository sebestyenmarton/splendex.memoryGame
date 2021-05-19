import React from 'react';
import Logo from '../../Images/evista.png';
import {
  Nav,
  NavbarContainer,
  NavbarLogo
} from './NavbarElements';

const Navbar = () => {
  return (
  <Nav>
    <NavbarContainer>
      <NavbarLogo src={Logo} />
    </NavbarContainer>
  </Nav>
  );
};

export default Navbar;
