import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';

const slideingAnimation2 = keyframes`
 0% { top:100px; opacity: 0}
 100% { top: 0vw; opacity: 1 }
 `;
const slideingAnimation3 = keyframes`
 0% { left:100px; opacity: 0}
 100% { left: 0; opacity: 1 }
 `;

export const SetGameContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  opacity: 0;
  top: 0vw; 
  left: 0vw; 
  display: flex;
  flex-direction: column;
  animation: ${slideingAnimation2} .7s ease-in-out .3s 1 forwards;
  &.topPosition{
    position: relative;
    flex-direction: row;
    margin-left: -64px;
    @media screen and (max-width: 650px){
      margin: 0;
    }
  }
`;
export const DeckContainer = styled.div`
  height: 36px;
  position: relative;
  opacity: 0;
  animation: ${slideingAnimation3} .7s ease-in-out .5s 1 forwards;
`;

export const DeckText = styled.div`
  padding-right: 1rem;
  font-size: 0.7rem;
  color: #1f1f1f;
  height: 36px;
  display: flex;
  align-items: center;
  text-align: right;
  opacity: 0;
  animation: ${slideingAnimation3} .7s ease-in-out .9s 1 forwards;
  &.topPosition{
    color: #f4f4f4;
  }
`;

export const DeckSize = styled.button`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 11px;
  background: #fff;
  border: 1px outset #b4b4b490;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  border-radius: 3px;
  cursor: pointer;
  min-width: 63.2px;
  height: 36px;
  font-weight: 500;
  transition: .1s ease-in-out;  
  &:hover{
    background: #f4f4f4;
    border-radius: 3px;
  }
  &.topPosition{
    background: #ff3000;
    color: #f4f4f4;
  }
`;

export const DeckSlidebar = styled.ul`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  border-radius: 3px;
  position: relative;  
  display: none;
  top: -324px;
  width: 63.2px;
  max-width: 63.2px;
  &.topPosition{
    position: absolute;
    top: 36px;
  }
`;

export const DeckLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 36px;
  width: 63.2px;
  color: #343434;
  font-weight: 500;
  &:hover{
    background: #f4f4f4;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    border-radius: 3px;
  }

  &:active{
    background: #ff3000;
    color: #f4f4f4;
  }
`;

export const SetGameButton = styled.button`
  margin-right: 1rem;
  margin-top: 1rem; 
  height: 100%;
  min-width: 99px;
  padding: 0 12px;
  background: #ff3000;
  color: #f4f4f4;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: .3s ease-in-out;  
  height: 36px;
  opacity: 0;
  animation: ${slideingAnimation3} .7s ease-in-out 1.3s 1 forwards;
  &:hover{
    background: #1f1f1f;
  }
  &.topPosition{
    margin-top: 0;
    &:hover{
      background: #f4f4f4;
      color: #1f1f1f;
    }
    &:active{
      transition: 0s ease-in-out;  
      background: #c4c4c4;
  }
  }
`;

export const DropDown = styled(IoMdArrowDropdown)`
  margin-left: 6px;
  font-size: 1.2rem;
  display: block;
`;

export const DropUp = styled(IoMdArrowDropup)`
  margin-left: 6px;
  font-size: 1.2rem;
  display: none;
`;
