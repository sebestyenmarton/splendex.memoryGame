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
    $('#DeckLink1').click(function(){$('#Size').html("6");});
    $('#DeckLink2').click(function(){$('#Size').html("8");});
    $('#DeckLink3').click(function(){$('#Size').html("10");});
    $('#DeckLink4').click(function(){$('#Size').html("12");});
    $('#DeckLink5').click(function(){$('#Size').html("14");});
    $('#DeckLink6').click(function(){$('#Size').html("16");});
    $('#DeckLink7').click(function(){$('#Size').html("18");});
    $('#DeckLink8').click(function(){$('#Size').html("20");});  
  });


  return (
  <Nav>
    <NavbarContainer> 
      <NavbarLogo src={Logo} />
      <SetGameContainer>
        <DeckText id="DeckText" > Deck size: </DeckText>
        <DeckContainer id="DeckContainer">
          <DeckSize id="DeckSize"> 
            <div id="Size" >20</div> 
            <DropDown id="DropDown" />
            <DropUp id="DropUp" />
          </DeckSize>
          <DeckSlidebar id="DeckSlidebar">
            <DeckLink id="DeckLink1">6</DeckLink>
            <DeckLink id="DeckLink2">8</DeckLink>
            <DeckLink id="DeckLink3">10</DeckLink>
            <DeckLink id="DeckLink4">12</DeckLink>
            <DeckLink id="DeckLink5">14</DeckLink>
            <DeckLink id="DeckLink6">16</DeckLink>
            <DeckLink id="DeckLink7">18</DeckLink>
            <DeckLink id="DeckLink8">20</DeckLink>
          </DeckSlidebar>
        </DeckContainer>
        <SetGameButton>start new game</SetGameButton>
      </SetGameContainer>
    </NavbarContainer>
  </Nav>
  );
};

export default Navbar;
