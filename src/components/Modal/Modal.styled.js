import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  overflow: auto;
  
`;

export const Modal = styled.div`
  width: 541px;
  max-height: 752px;
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
`;

export const Inner = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: #12141780;
`;

export const InfoWrapper = styled.div`
  padding: 40px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 752px;
  max-width: 541px;
  width: 100%;
  padding: 40px;
  overflow-y: auto;
  border-radius: 24px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  cursor: pointer;

  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
`;

export const SvgStyled = styled.svg`
  stroke: currentColor;
`;

export const ImgWrapper = styled.div`
  width: 461px;
  height: 248px;
  margin: 0 auto;
  border-radius: 14px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameWrapper = styled.div`
  font-size: 18px;
  font-weight: 500;

  margin-top: 14px;
`;

export const ModelSpan = styled.span`
  color: #3470ff;
`;

export const Description = styled.p`
  margin-bottom: 0;
`;

export const DescriptionAdress = styled.p`
  margin-bottom: 0;
  margin-top: 8px;
`;

export const TypeTextStyled = styled.p`
  margin-top: 4px;
`;

export const TextStyled = styled.p`
  margin-top: 4px;
  margin-bottom: 0;
`;

export const Span = styled.span`
  margin-bottom: 0;
  font-size: 12px;
  color: #12141780;
  &:not(:last-child):after {
    color: grey;
    content: '|';
    padding: 0 3px;
  }
`;



export const SpanQ = styled.span`
  background-color: #f9f9f9;
  padding: 7px 14px;
  border-radius: 9999px;

  font-size: 12px;
  color: #363535;
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 400;
margin-bottom: 24px;
  margin-top: 14px;
`;

export const AdressTextStyled = styled.p`
  margin-bottom: 0;
`;

export const AccessoriesText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const RentalText = styled.p`
  font-size: 14px;
  font-weight: 500;

  margin-top: 24px;
`;

export const Btn = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 168px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: blue;

  font-size: 14px;
  font-weight: 600;

  border-radius: 12px;
  border: none;

  margin-top: 24px;
`;

export const RentalMinAgeWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const RentalDepositWrapper = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 8px;
`;

export const DescriptionRentalPStyled = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 35px;
  font-size: 12px;
  font-weight: 400;

  letter-spacing: -0.24px;
`;

export const Price = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const A = styled.a`
  color: white;
`;
