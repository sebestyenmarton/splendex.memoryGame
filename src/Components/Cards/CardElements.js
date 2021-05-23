import styled from 'styled-components';


export const GameContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  height: 500px;
  margin-top: 25px;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
`;


export const CardEmpty = styled.div`
  width: 80%;
  height: 117%;
  position: absolute;
  padding: 20px;
  background: linear-gradient(to right, #f4f4f4 47%, #e3e3e3 53%);
  box-shadow: 10px 30px 12px rgba(0, 0, 0, 0.12);
  backface-visibility: hidden;
  border-radius: 12px;
`;

export const CardImg = styled.img`
  width: 80%;
  position: absolute;
  padding: 15px;
  opacity: 90%;
  background: linear-gradient(to right, #f4f4f4 47%, #e3e3e3 53%);
  backface-visibility: hidden;
  border-radius: 12px;
  @media screen and (max-width: 650px){
    padding: 10px;
  }
  @media screen and (max-width: 500px){
    padding: 7px;
  }
`;
