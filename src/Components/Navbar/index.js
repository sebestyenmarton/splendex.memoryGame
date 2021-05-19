import $ from 'jquery';
import React from 'react';
import Logo from '../../Images/evista.png';
import {
  DeckContainer,
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
    $('#DeckSize').mouseenter(function(){
      $('#DropDown').css("display","none");
      $('#DropUp, #DeckSlidebar').css("display","block");
    });
    $('#DeckContainer').mouseleave(function(){
      $('#DropDown').css("display","block");
      $('#DropUp, #DeckSlidebar').css("display","none");
    });
/*
    var numbers = ['1','2','3','4','5','6','7','8']; 
    numbers.forEach(myFunction);
    function myFunction(i, val) {
      $('.DeckLink:nth-child(' + val + ')').mouseenter(function(){
        $('.Size').innerHTML = '.DeckLink:nth-child(' + val + ')'; 
      });
      $('.DeckLink:nth-child(' + val + ')').mouseleave(function(){
        $('.Size').innerHTML = '10'; 
      });
    }
*/
  });

  return (
  <Nav>
    <NavbarContainer> 
      <NavbarLogo src={Logo} />
      <SetGameContainer>
        <DeckText id="DeckText" > Deck size: </DeckText>
        <DeckContainer id="DeckContainer">
          <DeckSize id="DeckSize"> 
            <div class="Size" >20</div> 
            <DropDown id="DropDown" />
            <DropUp id="DropUp" />
          </DeckSize>
          <DeckSlidebar id="DeckSlidebar">
            <DeckLink class="DeckLink" >6</DeckLink>
            <DeckLink class="DeckLink" >8</DeckLink>
            <DeckLink class="DeckLink" >10</DeckLink>
            <DeckLink class="DeckLink" >12</DeckLink>
            <DeckLink class="DeckLink" >14</DeckLink>
            <DeckLink class="DeckLink" >16</DeckLink>
            <DeckLink class="DeckLink" >18</DeckLink>
            <DeckLink class="DeckLink">20</DeckLink>
          </DeckSlidebar>
        </DeckContainer>
        <SetGameButton>start new game</SetGameButton>
      </SetGameContainer>
    </NavbarContainer>
  </Nav>
  );
};

export default Navbar;
