
import Select from 'react-select';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* margin: 50px auto 25px;
  max-width: 320px; */
  padding: 50px;
  /* box-shadow: 0px 0px 10px;
  border-radius: 15px; */
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

export const ModelWrapper = styled.div`
  /* margin: 50px auto 25px;
  max-width: 320px; */
  
  /* box-shadow: 0px 0px 10px;
  border-radius: 15px; */
  display: flex;
  flex-direction: column;
 font-size:14px;

  
`;

export const PriceWrapper = styled.div`
  /* margin: 50px auto 25px;
  max-width: 320px; */

  /* box-shadow: 0px 0px 10px;
  border-radius: 15px; */
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

export const SelectLabel = styled.p``;



export const SelectModal = styled(Select)`
  width: 224px;
`;

export const SelectPrice = styled(Select)`
  width: 125px;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
margin-bottom: 70px;

`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
 width:170px;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  margin-top: 8px;
  border: none;
  color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

`;

export const FalseInput = styled.div`
  display: flex;
  position: absolute;
  bottom: 14px;
  font-size: 18px;
  font-weight: 500;
 
`;

export const Blink = styled.div`
  margin-left: 1px;
  display: inline-block;
  width: 1px;
  height: 18px;
  background-color: black;
 
`;

export const WrapSecondInput = styled.div`
  position: relative;
`;

export const ButtonSearch = styled.button`
  display: flex;
  /* height: 48px; */
  padding: 14px 44px 14px 44px;
margin-bottom:1px;
  /* justify-content: center; */
  /* align-items: center; */
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

 
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

