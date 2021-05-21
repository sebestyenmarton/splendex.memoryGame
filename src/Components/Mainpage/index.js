import React from 'react';
import {
  MainpageContainer,
  MainpageRules,
  MainpageTitle,
  TextLi
} from './MainPageElements';

const Mainpage = () => {
  return (
    <MainpageContainer id="MainpageContainer" >
      <MainpageTitle>
        Splendex Memory Game
      </MainpageTitle>
      <MainpageRules>
        <TextLi>At the beginning of the game, all the cards are mixed up and laid in rows, face down on the window.</TextLi>
        <TextLi>The Player turns over two cards:</TextLi>
        <TextLi>If the cards don’t match (it’s not a pair), them turns back.</TextLi>
        <TextLi>However, if the two cards match, it’s a pair!</TextLi>
        <TextLi> When the player have found all the pairs, the game is end.</TextLi>
      </MainpageRules>
    </MainpageContainer>
  );
};

export default Mainpage;
