import React from 'react';
import Background from '../../Images/background.jpg';
import { GamePageContainer, GPage } from './GamePageElements';

const GamePage = () => {
  return (
    <GPage>
      <GamePageContainer src={Background}/>
    </GPage>
  );
};

export default GamePage;
