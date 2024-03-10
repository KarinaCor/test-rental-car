import Select from 'react-select';
import styled from 'styled-components';

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
  width: 170px;
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

  padding: 14px 44px 14px 44px;
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

export const FilterFormStyled = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  column-gap: 18px;
  align-items: end;
  margin-bottom: 50px;
  .label-container {
    display: flex;
    flex-direction: column;
  }

  label,
  .label-mileage {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.27;
    margin-bottom: 8px;
  }

  select {
    padding: 14px 18px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }

  select {
    background-color: #f7f7fb;
    border: none;
    border-radius: 14px;
  }
  .btn-container {
    display: flex;
    gap: 8px;
  }
  .accept-btn,
  .reset-btn {
    color: #ffffff;
    border-radius: 12px;
    padding: 14px 44px;
    width: 136px;
    height: 48px;
    background-color: #3470ff;
  }

  button {
    transition: transform 250ms linear;
  }
  button:hover,
  button:focus {
    background-color: blue;
  }

  option {
    color: rgba(18, 20, 23, 0.2);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
  }

  select::-webkit-scrollbar {
    width: 8px;
  }

  .arrow-svg {
    position: absolute;
    bottom: 18px;
    right: 18px;
    pointer-events: none;
  }

  .label-container {
    position: relative;
  }

  .brand-container {
    width: 224px;
  }
  .price-container {
    width: 125px;
  }

  .brand-svg,
  .price-svg {
    transition: transform 250ms linear;
  }

  .brand-svg {
    transform: ${(props) => (props.$brandFocus ? 'none' : 'rotate(180deg)')};
  }

  .price-svg {
    transform: ${(props) => (props.$priceFocus ? 'noinpne' : 'rotate(180deg)')};
  }

  .input-container {
    display: flex;
    align-items: center;
    padding: 14px 24px;
    width: 160px;
  }

  .input-container input {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    padding-left: 3px;
  }

  .input-container label {
    margin-bottom: 0;
  }
  .input-container label,
  .input-container input,
  select {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: var(--primary-text-color);
  }

  .left {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  input {
    max-width: 100%;
  }
`;
