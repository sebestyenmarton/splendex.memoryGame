import React from 'react';
import Logo from '../../Images/evista.png';
import SetGame from '../SetGame';
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
      <SetGame/>
    </NavbarContainer>
  </Nav>
  );
};

export default Navbar;
