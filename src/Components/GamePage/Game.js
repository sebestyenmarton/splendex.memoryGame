import React from 'react';
import {
  CardBox,
  CardEmpty,
  CardImg,
  CardRotate,
  GameContainer
} from './GameElements';

const Game = () => {
  return (
    <GameContainer>
      <CardBox id='Cardbox'>
        <CardRotate id='CardRotate'>
          <CardEmpty id='Face'/>
          <CardImg id='CardImg'/>
        </CardRotate>
      </CardBox>
    </GameContainer>
  );
};

export default Game;