import React from 'react';
import Logo from '../../Images/EvistaBackground.png';
import SetGame from '../SetGameComponents';
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
