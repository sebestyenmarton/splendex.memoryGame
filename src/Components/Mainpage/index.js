import $ from 'jquery';
import React from 'react';
import Logo from '../../Images/evista.png';
import { Nav, NavbarContainer, NavbarLogo } from '../Navbar/NavbarElements';
import SetGame from '../SetGame';
import { MainPage } from './MainpageElements';

const Mainpage = () => {
  return (
    <MainPage id="Mainpage" >
      <Nav>
        <NavbarContainer>
        <NavbarLogo src={Logo} />
        </NavbarContainer>
      </Nav>
      <SetGame/>
    </MainPage>
  )
}

$(document).ready(function(){
  $('#MainpageStart').click(function(){
    $('#Mainpage').css("display","none");
    //$('#SetGameContainer').css($("display","flex"));
  });
});
export default Mainpage;
