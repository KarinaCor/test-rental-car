import { getCityFromAddress, getCountryFromAddress, getDriverLicense, getFormatMileage,  getFormatRentalPrice,  getMinAge, getSecurityDeposit } from '../helpers/utils';
import * as SC from './Modal.styled';

import { useEffect, useCallback } from 'react';

const Modal = ({ children, isOpen, closeFnc, car }) => {
      const closeOnClick = useCallback(() => {
        if (isOpen) {
          closeFnc();
        }
      }, [isOpen, closeFnc]);

      useEffect(() => {
        const handlePressEsc = (e) => {
          if (e.code === 'Escape') {
            closeOnClick();
          }
        };
        if (isOpen) {
          document.body.classList.add('body-modal-open');
          window.addEventListener('keydown', handlePressEsc);
        } else {
          document.body.classList.remove('body-modal-open');
        }

        return () => {
          window.removeEventListener('keydown', handlePressEsc);
          document.body.classList.remove('body-modal-open');
        };
      }, [isOpen, closeOnClick]);

      const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          closeOnClick();
        }
      };

     const {
       id,
       year,
       make,
       model,
       type,
       img,
       description,
       accessories,
       fuelConsumption,
       engineSize,
       functionalities,
       
       
     } = car;
     const city = getCityFromAddress(car);
     const country = getCountryFromAddress(car);
     const minAge = getMinAge(car);
     const license = getDriverLicense(car);
     const deposit = getSecurityDeposit(car);
     const formatMileage = getFormatMileage(car);
     const price = getFormatRentalPrice(car);
    

  return (
    <>
      <SC.Overlay onClick={handleOverlayClick}>
        <SC.Modal onClick={handleOverlayClick}>
          <SC.Inner>
            {children}
            <SC.CloseBtn onClick={closeOnClick}>X</SC.CloseBtn>
          </SC.Inner>
          <SC.InfoWrapper>
            <SC.ImgWrapper>
              <SC.Img src={img} alt={description} />
            </SC.ImgWrapper>

            <SC.NameWrapper>
              {make} <SC.ModelSpan>{model}</SC.ModelSpan>, {year}
            </SC.NameWrapper>

            <SC.Description>
              <SC.Span>{city}</SC.Span>
              <SC.Span>{country}</SC.Span>
              <SC.Span>Id: {id}</SC.Span>
              <SC.Span>Year: {year}</SC.Span>
              <SC.Span>Type: {type}</SC.Span>
            </SC.Description>

            <SC.Description>
              <SC.Span>Fuel Consumption: {fuelConsumption}</SC.Span>
              <SC.Span>Engine Size: {engineSize}</SC.Span>
            </SC.Description>

            <SC.DescriptionText>{description}</SC.DescriptionText>

            <SC.AccessoriesText>
              Accessories and functionalities:
            </SC.AccessoriesText>

            <SC.AdressTextStyled>
              <SC.Span>{accessories[0]}</SC.Span>
              <SC.Span>{accessories[1]}</SC.Span>
              <SC.Span>{accessories[2]}</SC.Span>
            </SC.AdressTextStyled>

            <SC.TypeTextStyled>
              <SC.Span>{functionalities[0]}</SC.Span>
              <SC.Span>{functionalities[1]}</SC.Span>
              <SC.Span>{functionalities[2]}</SC.Span>
            </SC.TypeTextStyled>
            <SC.RentalText>Rental Conditions:</SC.RentalText>

            <SC.RentalMinAgeWrapper>
              <SC.SpanQ>
                {minAge.key}: <SC.Price>{minAge.value}</SC.Price>
              </SC.SpanQ>
              <SC.SpanQ>{license}</SC.SpanQ>
            </SC.RentalMinAgeWrapper>

            <SC.RentalDepositWrapper>
              <SC.SpanQ>{deposit}</SC.SpanQ>
              <SC.SpanQ>
                Mileage: <SC.Price>{formatMileage}</SC.Price>
              </SC.SpanQ>
              <SC.SpanQ>
                Price: <SC.Price>{price}</SC.Price>
              </SC.SpanQ>
            </SC.RentalDepositWrapper>

            <SC.Btn type="button">
              <SC.A href="tel:+380730000000">Rental car</SC.A>
            </SC.Btn>
          </SC.InfoWrapper>
        </SC.Modal>
      </SC.Overlay>
    </>
  );
};
export default Modal;


