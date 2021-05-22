import { default as $, default as jQuery } from 'jquery';
import React from 'react';
import Mainpage from '../MainPage';
import {
  DeckContainer,
  DeckLink,
  DeckSize,
  DeckSlidebar,
  DeckText,
  DropDown,
  DropUp,
  SetGameButton,
  SetGameContainer
} from './SetGameElements';

const SetGame = () => {
  return (
    <SetGameContainer id="SetGameContainer" primary={1} >
      <Mainpage/>
      <DeckText id="DeckText"> Deck size: </DeckText>
      <DeckContainer id="DeckContainer">
        <DeckSize id="DeckSize"> 
          <div id="Size" >20</div> 
          <DropDown id="DropDown" />
          <DropUp id="DropUp" />
        </DeckSize>
        <DeckSlidebar id="DeckSlidebar">
          <DeckLink id="DeckLink6">6</DeckLink>
          <DeckLink id="DeckLink8">8</DeckLink>
          <DeckLink id="DeckLink10">10</DeckLink>
          <DeckLink id="DeckLink12">12</DeckLink>
          <DeckLink id="DeckLink14">14</DeckLink>
          <DeckLink id="DeckLink16">16</DeckLink>
          <DeckLink id="DeckLink18">18</DeckLink>
          <DeckLink id="DeckLink20">20</DeckLink>
        </DeckSlidebar>
      </DeckContainer>
      <SetGameButton id = "MainpageStart" >start new game</SetGameButton>
    </SetGameContainer>
  );
};

$(document).ready(function(){
  $('#DeckSize').mouseenter(function(){downFunction();});
  $('#DeckContainer').mouseleave(function(){upFunction();});
  var clicks = 0;
  $('#DeckSize').click(function(){
    if (clicks == 0){downFunction();++clicks;}
    else{upFunction();--clicks;}
  });
  function downFunction(){
    $('#DropDown').css("display","none");
    $('#DropUp, #DeckSlidebar').css("display","block");
  };
  function upFunction(){
    $('#DropDown').css("display","block");
    $('#DropUp, #DeckSlidebar').css("display","none");
  };
  $('#MainpageStart').click(function(){
    $('#SetGameContainer, #DeckText, #DeckSlidebar, #MainpageContainer, #GameBox')
      .addClass("topPosition");
    $(this).addClass("topPosition");
  });
  var numbers = ['6','8','10','12','14','16','18','20'];  
  jQuery.each( numbers, function( i, val){     
    $('#DeckLink' + val).click(function(){
      $('#Size').html(val);
    });
  });
});


export default SetGame;
