import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid blue;
  padding-left: 128px;
  padding-right: 128px;
  align-items:center;
`;

export const LinkStyled = styled(Link)`
  width: 100%;
  max-width: 160px;
  height: 40px;
  font-size:18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
