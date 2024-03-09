import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const ImgWrapper = styled.div`
  width: 274px;
  height: 268px;

  position: relative;

  display: flex;
  flex-shrink: 0;

  border-radius: 14px;


  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BtnFavorite = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  cursor: pointer;

  width: 18px;
  height: 18px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

`;

export const Svg = styled.svg`
  stroke: currentColor;
  fill: currentColor;
`;

export const NameWrapper = styled.div`
  width: 274px;
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  margin-top: 14px;
`;

export const ModelSpan = styled.span`
  color: #3470FF;
`;

export const Price = styled.span`
  padding-top:0;
`;

export const AdressWrapper = styled.p`
  display: flex;
  width: 270px;
  margin-top: 8px;
  margin-bottom: 4px;
  line-height: 1.25rem;
`;

export const TextWrapper = styled.p`
  display: flex;
  width: 270px;
  margin-top: 4px;
  margin-bottom:0;
`;

export const Span = styled.span`
  color: #12141780;

  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:not(:last-child):after {
    color: grey;
    content: '|';
    padding: 0 3px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 274px;
  height: 44px;
  // padding: 12px 99px;
  color: #ffffff;
  background-color: #3470ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  font-size: 14px;
  font-weight: 600;

  border-radius: 12px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  margin-top: 28px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
