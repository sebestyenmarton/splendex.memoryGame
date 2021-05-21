import styled from 'styled-components';

export const MainpageContainer = styled.div`
  color: #151515;
  max-width: 500px;
  &.topPosition{
    display: none;
  }
  @media screen and (max-width: 600px){
    padding: 0 1.7rem;
  }
`;

export const MainpageTitle = styled.div`
  font-size: 1.7rem;
  padding-bottom: 1.2rem;
  text-align: center;
`;

export const MainpageRules = styled.div`
  list-style-type: circle;
  padding-bottom: 1.2rem;
  
`;

export const TextLi = styled.h4`
  padding: 0.3rem 0;
`;