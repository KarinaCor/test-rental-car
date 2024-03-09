import * as SC from './CarList.styled';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import icon from '../../components/img/sprite-icons.svg';

import Modal from '../Modal/Modal';


import { selectFavoriteCars } from '../../redux/carsSelectors';
import { addToFavorites, removeFromFavorites } from '../../redux/carsSlice';
import { getCityFromAddress, getCountryFromAddress } from '../helpers/utils';



const CarList = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    rentalPrice,
    rentalCompany,
    accessories,
  } = car;
  const city = getCityFromAddress(car);
  const country = getCountryFromAddress(car);

  const carIsFavorite = favoriteCars.some(
    favoriteCar => favoriteCar.id === car.id
  );

  const handleToggleFavorite = () => {
    if (carIsFavorite) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  const toogleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const favoriteIcon = carIsFavorite ? 'heart-active' : 'heart-normal';

  return (
    <>
      <SC.Wrapper>
        <SC.ImgWrapper>
          <SC.Img src={img} alt={description} />

          <SC.BtnFavorite
            type="button"
            onClick={handleToggleFavorite}
            aria-label={
              carIsFavorite ? 'Remove from favorites' : 'Add to favorites'
            }
          >
            <SC.Svg width="14" height="14">
              <use href={`${icon}#${favoriteIcon}`}></use>
            </SC.Svg>
          </SC.BtnFavorite>
        </SC.ImgWrapper>

        <SC.NameWrapper>
          <div>
            {make} <SC.ModelSpan>{model}</SC.ModelSpan>, {year}
          </div>

          <SC.Price>{rentalPrice}</SC.Price>
        </SC.NameWrapper>

        <SC.AdressWrapper>
          <SC.Span>{city}</SC.Span>
          <SC.Span>{country}</SC.Span>
          <SC.Span>{rentalCompany}</SC.Span>
        </SC.AdressWrapper>

        <SC.TextWrapper>
          <SC.Span>{type}</SC.Span>
          <SC.Span>{model}</SC.Span>
          <SC.Span>{id}</SC.Span>
          <SC.Span>{accessories[0]}</SC.Span>
        </SC.TextWrapper>

        <SC.Btn type="button" onClick={toogleModal}>
          Learn more
        </SC.Btn>
      </SC.Wrapper>

      {isModalOpen && (
        <Modal car={car} isOpen={isModalOpen} closeFnc={toogleModal}></Modal>
      )}
    </>
  );
};

export default CarList;