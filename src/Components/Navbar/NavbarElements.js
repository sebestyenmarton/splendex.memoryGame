import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  //margin-top: -70px;
  top: 0;
  z-index: 100;
  position: sticky;
  transition: all 0.5s ease 0s;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  height: 50px;
  width: 100%;
  padding: 7px 24px;
  z-index: 1;
  font-weight: 600;
  color: #f4f4f4;
`;

export const NavbarLogo = styled.img` 
  height: 100%;
  width: initial;
  border-radius: 3px;
  padding: 0 24px;
`;

export const SetGameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 650px){
    margin: 0;
  }
`;
export const DeckContainer = styled.div`
  height: 100%;
`;

export const DeckText = styled.div`
  padding-right: 1rem;
  font-size: 0.7rem;
  color: #b4b4b4;
`;

export const DeckSize = styled.button`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  background: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    background: #f4f4f4;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    border-radius: 3px;
  }
`;

export const DeckSlidebar = styled.ul`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  border-radius: 3px;
  position: absolute;
  top: 43px;
  display: none;
`;

export const DeckLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 36px;
  width: 63.2px;
  color: #1f1f1f;
  font-weight: 100;
  &:hover{
    background: #f4f4f4;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    border-radius: 3px;
  }
`;

export const SetGameButton = styled.button`
  margin-right: 1rem;
  height: 100%;
  padding: 0 12px;
  background: #ff3000;
  color: #f4f4f4;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: .3s ease-in-out;  
  &:hover{
    background: #f4f4f4;
    color: #1f1f1f
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