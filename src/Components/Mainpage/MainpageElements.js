import styled from 'styled-components';

export const MainpageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #343434;
  width: 100%;
  padding: 2.1rem 0 2.1rem 0;
  margin-bottom: 1rem;
  position: relative;
  &.topPosition{
    display: none;
  }
`;

export const MainpageBackground = styled.img`
  float: right;
  position: absolute;
  top: 0;
  z-index: -1;
  width: 1400px;
  height: 100%;
  opacity: 100%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 600px){
    opacity: 25%;
  }
`;

export const MainpageTitle = styled.div`
  font-size: 1.7rem;
  padding-bottom: 1.2rem;
  text-align: center;
  @media screen and (max-width: 600px){
    width: 600px;
    padding-top: 1.2rem;
    background: #242424;
    color: #fff;
    position: relative;
    margin-bottom: 2rem;
  }
`;

export const MainpageRules = styled.div`
  max-width: 500px;
  list-style-type: circle;
  padding-bottom: 1.2rem;
  text-align: center;
  @media screen and (max-width: 600px){
    text-align: left;
    padding-right: 1.7rem;
    padding-left: 1.7rem;
  }
`;

export const TextLi = styled.h4`
  padding: 0.3rem 0;
  font-weight: 400;
  @media screen and (max-width: 600px){
    font-weight: 500;
  }
`;