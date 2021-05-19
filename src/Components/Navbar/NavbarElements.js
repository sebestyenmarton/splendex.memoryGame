import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
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
  height: 70px;
  width: 100%;
  padding: 7px 24px;
  z-index: 1;
  font-weight: 600;
  color: #fff;
`;

export const NavbarLogo = styled.img` 
  height: 100%;
  width: initial;
  border-radius: 3px;
  padding-left: 24px;
`;