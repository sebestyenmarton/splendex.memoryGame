import styled from 'styled-components';

export const GPage = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #141414;
  z-index: -1;
  display: flex; 
  justify-content: center;
`;

export const GamePageContainer = styled.img`
  width: 100%;
  height: 800px;
  position: fixed;
  z-index: 1;
`;

export const GameBox = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 800px;
  padding: 1rem 16px;
  display: none;
  &.topPosition{
    display: block; 
  }
`;

export const UpSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tries = styled.div`
  display: flex;
  align-items: center;
`;

export const TriesText = styled.h5`
  font-weight: 500;
`;

export const TriesNumber = styled.h3`
  font-weight: 500;
  padding: 3px 0 0 10px;
`;

export const BestResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BestResultText = styled.h5`
  font-weight: 500;
`;

export const BestResultNumber = styled.h2`
  margin-top: 4px;
`;

export const RestartButton = styled.button`
  background-color: #ffffff10;
  min-width: 99px;
  padding: 0 12px;
  color: #141414;
  font-weight: 500;
  border: solid 1px;
  border-radius: 3px;
  cursor: pointer;
  transition: .3s ease-in-out;
  height: 36px;
  &:hover{
      background: #ff3000;
      color: #f4f4f4;
      border: solid 1px #ff3000;
    }
    &:active{
      transition: 0s ease-in-out;  
      background: #c4c4c4;
      border: solid 1px #c4c4c4;
    }
  }
`;

