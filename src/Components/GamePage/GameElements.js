import styled from 'styled-components';

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

`;

export const CardBox = styled.div`
  height: 100px;
`;

export const CardRotate = styled.div`

`;

export const CardImg = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  z-index: 2;
`;

export const CardEmpty = styled.div`
  height: 100px;
  background: lightcyan;
  z-index: 1;
`;