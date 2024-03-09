import { getCityFromAddress, getCountryFromAddress, getDriverLicense, getFormatMileage,  getMinAge, getSecurityDeposit } from '../helpers/utils';
import * as SC from './Modal.styled';

import { useEffect, useCallback } from 'react';

const Modal = ({ children, isOpen, closeFnc, car }) => {
    const closeOnClick = useCallback(() => {
      if (isOpen) {
        closeFnc();
      }
    }, [isOpen, closeFnc]);

    useEffect(() => {
      const handlePressEsc = e => {
        if (e.code === 'Escape') {
          closeOnClick();
        }
      };

      window.addEventListener('keydown', handlePressEsc);

      return () => {
        window.removeEventListener('keydown', handlePressEsc);
      };
    }, [closeOnClick]);

    const handleOverlayClick = e => {
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
       rentalPrice,
       
     } = car;
     const city = getCityFromAddress(car);
     const country = getCountryFromAddress(car);
     const minAge = getMinAge(car);
     const license = getDriverLicense(car);
     const deposit = getSecurityDeposit(car);
     const formatMileage = getFormatMileage(car);
    

  return (
    <>
      <div>
        <SC.Overlay onClick={handleOverlayClick}>
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
              <SC.Span>
                {minAge.key}: <SC.Price>{minAge.value}</SC.Price>
              </SC.Span>
              <SC.Span>{license}</SC.Span>
            </SC.RentalMinAgeWrapper>

            <SC.RentalDepositWrapper>
              <SC.Span>{deposit}</SC.Span>
              <SC.Span>
                Mileage: <SC.Price>{formatMileage}</SC.Price>
              </SC.Span>
              <SC.Span>
                Price: <SC.Price>{rentalPrice}</SC.Price>
              </SC.Span>
            </SC.RentalDepositWrapper>

            <SC.Btn type="button">
              <SC.A href="tel:+30000000">Rental car</SC.A>
            </SC.Btn>
          </SC.InfoWrapper>
        </SC.Overlay>
      </div>
    </>
  );
};
export default Modal;


