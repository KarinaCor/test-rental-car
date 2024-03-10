import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 18px;
  margin-bottom: 50px;
  justify-content: center;
  flex-direction: row;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const Select = styled.select`
  align-items: center;
  cursor: pointer;
  display: flex;
  border-radius: 14px;
  box-sizing: border-box;
  background: #f7f7fb;
  padding-left: 18px;
  height: 48px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  width: 224px;
`;

export const SelectPrice = styled.select`
  width: 125px;
  height: 48px;
  align-items: center;
  cursor: pointer;
  display: flex;
  border-radius: 14px;
  box-sizing: border-box;
  background: #f7f7fb;
  border: none;
  padding-left: 18px;
  font-size: 18px;
  font-weight: 500;
`;

export const Option = styled.option`
  background-color: red;
`;

export const Wrapper = styled.div`
  padding: 50px;

  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

export const ModelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const PriceWrapper = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

export const SelectLabel = styled.p``;

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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin-top: 20px;
`;

export const ButtonSearch = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;

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
