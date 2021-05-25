import styled, { keyframes } from 'styled-components';

const slideingAnimation = keyframes`
 0% { top: 400px; opacity: 0}
 100% { top: 69px; opacity: 1}
 `;

export const CardContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  height: 500px;
  margin-top: 25px;
  perspective: 1000px;
  display: flex;
  opacity: 0;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${slideingAnimation} .7s ease-in-out .3s 1 forwards;
`;

export const CardBox = styled.div`

  width: calc(19% - 10px);
  height: calc(20% - 10px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  @media screen and (max-width: 470px){
    height: calc(15% - 10px);
    width: calc(27% - 10px);
  }
  transform-style: preserve-3d;
  transition: transform .4s;
  transform: scale(1);
  &:active{
    transition: transform .1s;
    transform: scale(0.93);
  }
  &.rotate{
    transform: rotateY(180deg);
  }
`;


export const CardEmpty = styled.div`
  width: 80%;
  height: 117%;
  position: absolute;
  padding: 20px;
  background: linear-gradient(to right, #fff 10%, #f4f4f4 100%);
  box-shadow: 10px 30px 12px rgba(0, 0, 0, 0.12);
  backface-visibility: hidden;
  border-radius: 12px;
  border-left: 1px solid #00000010;
  border-top: 1px solid #00000010;
  &.invisible{
    background: #ff400030;
    border-left: 0px solid #00000010;
    border-top: 0px solid #00000010;
  }
`;

export const CardImg = styled.img`
  width: 80%;
  position: absolute;
  padding: 15px;
  opacity: 90%;
  background: linear-gradient(to right, #fff 10%, #f4f4f4 100%);
  backface-visibility: hidden;
  border-radius: 12px;
  transform: rotateY(180deg);
  border-left: 1px solid #00000000;
  border-top: 1px solid #00000000;
  @media screen and (max-width: 650px){
    padding: 10px;
  }
  @media screen and (max-width: 500px){
    padding: 7px;
  }
  &.invisible{
    background: #ff400030;
    border-left: 0px solid #00000000;
    border-top: 0px solid #00000000;
  }
`;
