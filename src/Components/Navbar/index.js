import $ from 'jquery';
import React from 'react';
import Logo from '../../Images/evista.png';
import {
  DeckLink,
  DeckSize,
  DeckSlidebar,
  DeckText,
  DropDown,
  DropUp,
  Nav,
  NavbarContainer,
  NavbarLogo,
  SetGameButton,
  SetGameContainer
} from './NavbarElements';

const Navbar = ({}) => {
  $(document).ready(function(){
    $('#DeckSize').click(function(){
      $('#DropDown').css("display","none");
      $('#DropUp, #DeckSlidebar').css("display","block");
    });
  });

  return (
  <Nav>
    <NavbarContainer> 
      <NavbarLogo src={Logo} />
      <SetGameContainer>
        <DeckText> Deck size: </DeckText>
          <DeckSize id="DeckSize"> 
            20 
            <DropDown id="DropDown" />
            <DropUp id="DropUp" />
          </DeckSize>
          <DeckSlidebar id="DeckSlidebar">
            <DeckLink>6</DeckLink>
            <DeckLink>8</DeckLink>
            <DeckLink>10</DeckLink>
            <DeckLink>12</DeckLink>
            <DeckLink>14</DeckLink>
            <DeckLink>16</DeckLink>
            <DeckLink>18</DeckLink>
            <DeckLink>20</DeckLink>
          </DeckSlidebar>
        <SetGameButton>start new game</SetGameButton>
      </SetGameContainer>
    </NavbarContainer>
  </Nav>
  );
};

export default Navbar;
