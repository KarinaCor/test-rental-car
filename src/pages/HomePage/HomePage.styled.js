import { Link } from 'react-router-dom';
import styled from 'styled-components';




export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display:flex;
  align-items: center;
  flex-direction: column;
  
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight:600;
  color: white;
  margin-top: 40px;
`;

export const Span = styled.span`
  color: red;

`;

export const LinkStyled = styled(Link)`
  cursor: pointer;

  width: 100%;
  max-width: 274px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: white;
 
  font-size: 25px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
  margin-top: 36px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;


