import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items:center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;

  color: black;
  font-weight: 600;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;