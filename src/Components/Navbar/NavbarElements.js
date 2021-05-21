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
  @media screen and (max-width: 520px){
    padding: 7px 0px;
  }
`;

export const NavbarLogo = styled.img` 
  height: 100%;
  width: initial;
  border-radius: 3px;
  margin: 0 24px;
  @media screen and (max-width: 400px){
    margin: 0px 12px;
  }
`;
