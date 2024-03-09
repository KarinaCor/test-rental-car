import { useSelector } from 'react-redux';

import * as SC from './FavoritePage.styled';

import CarList from 'components/CarList/CarList';
import { selectFavoriteCars } from '../../redux/carsSelectors';
// import { CatalogList } from '../CatalogPage/CatalogPage.styled';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  const isShowFavoriteList = favoriteCars.length > 0;

  return (
    <section>
      <SC.Container>
        {!isShowFavoriteList && (
          <SC.TextSkeleton>There are no favorite cars</SC.TextSkeleton>
        )}

        {isShowFavoriteList && (
          <SC.CatalogList>
            {favoriteCars.map(car => (
              <li key={car.id}>
                <CarList car={car} />
              </li>
            ))}
          </SC.CatalogList>
        )}
      </SC.Container>
    </section>
  );
};

export default FavoritesPage;
