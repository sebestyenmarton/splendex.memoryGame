import React from 'react';
import Background from '../../Images/background.jpg';
import Game from '../Cards/Cards';
import {
  BestResult,
  BestResultNumber,
  BestResultText,
  GameBox,
  GamePageContainer,
  GPage,
  RestartButton,
  Tries,
  TriesNumber,
  TriesText,
  UpSection
} from './GamePageElements';

const GamePage = () => {
  return (
    <GPage>
      <GamePageContainer src={Background}/>
      <GameBox id="GameBox">
        <UpSection>
          <Tries>
            <TriesText> Current tries:</TriesText>
            <TriesNumber> 0 </TriesNumber>
          </Tries>
          <BestResult>
            <BestResultText> Best: </BestResultText>
            <BestResultNumber> 5 </BestResultNumber>
          </BestResult>
          <RestartButton> RESTART </RestartButton>
        </UpSection>  
        <Game/>
      </GameBox>
    </GPage>
  );
};

export default GamePage;
