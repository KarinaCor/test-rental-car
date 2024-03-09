import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as SC from './CatalogPage.styled';
import {
 
  selectError,

 
  selectIsLoading,
  selectItemsCars,
} from '../../redux/carsSelectors';
import { allCars, LoadMoreCars } from '../../redux/carsOperation';
import CarList from 'components/CarList/CarList';
import FilterForm from 'components/FilterForm/FilterForm';

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const itemsCars = useSelector(selectItemsCars);
//    const filterToBrand = useSelector(selectCarBrands);
//   const error = useSelector(selectError);
//   const isLoading = useSelector(selectIsLoading);
//   const [currentPage, setCurrentPage] = useState(2);
//   const [filteredCars, setFilteredCars] = useState([]);

//   useEffect(() => {
//     dispatch(allCars());
//   }, [dispatch]);

//   useEffect(() => {
//     setFilteredCars(itemsCars);
//   }, [itemsCars]);

//   const handleLoadMore = () => {
//     dispatch(LoadMoreCars(currentPage));
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const isShowList = itemsCars.length > 0;
//   const isShowButton =
//     itemsCars.length > 0 && !isLoading && !(filteredCars.length % 12);

//     const filterToMark = () => {
//       if (
//         filterToBrand.make !== undefined &&
//         filterToBrand.make !== 'Enter the text' &&
//         filterToBrand.rentalPrice !== 'To $' &&
//         filterToBrand.rentalPrice !== undefined &&
//         filterToBrand.make.length > 0 &&
//         filterToBrand.rentalPrice.length > 0
//       ) {
//         // Notify.success('Car Brand Filtered Successfully');
//         return (
//           itemsCars &&
//           itemsCars.filter((item) => {
//             return (
//               item.make === filterToBrand.make &&
//               item.rentalPrice <= filterToBrand.rentalPrice
//             );
//           })
//         );
//       }

//       return itemsCars;
//     };
//     const catalogByMark = filterToMark();

 
 
//   return (
//     <section>
//       <SC.Container>
//         <FilterForm />
//         {itemsCars && <CarList dataCatalog={catalogByMark} />}
//         {isShowList && (
//           <SC.CatalogList>
//             {itemsCars.map((car) => (
//               <li key={car.id}>
//                 <CarList car={car} />
//               </li>
//             ))}
//           </SC.CatalogList>
//         )}

//         {isShowButton && (
//           <SC.BtnLoadMore type="button" onClick={handleLoadMore}>
//             Load more
//           </SC.BtnLoadMore>
//         )}

//         {isLoading && !error && (
//           <div
//             style={{
//               textAlign: 'center',
//               fontSize: '16px',
//               fontWeight: 500,
//               color: '#3470ff',
//               margin: '100px auto 0',
//             }}
//           >
//             Loading
//           </div>
//         )}
//         {error && error}
//       </SC.Container>
//     </section>
//   );
// };

// export default CatalogPage;


const CatalogPage = () => {
  const dispatch = useDispatch();
  const itemsCars = useSelector(selectItemsCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(2);
    const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    dispatch(allCars());
  }, [dispatch]);

   useEffect(() => {
     setFilteredCars(itemsCars);
   }, [itemsCars]);

  const handleLoadMore = () => {
    dispatch(LoadMoreCars(currentPage));
    setCurrentPage(prevPage => prevPage + 1);
  };

  const isShowList = itemsCars.length > 0;
  const isShowButton =
    itemsCars.length > 0 && !isLoading && !(filteredCars.length % 12);

     const handleFilterChange = ({ make, rentalPrice }) => {
       let filtered = itemsCars;
       if (make) {
         filtered = filtered.filter((car) =>
           car.make.toLowerCase().includes(make.toLowerCase())
         );
       }
       if (rentalPrice) {
         filtered = filtered.filter(
           (car) => car.price === parseInt(rentalPrice)
         );
       }
       setFilteredCars(filtered);
     };

  return (
    <section>
      <SC.Container>
        <FilterForm onFilterChange={handleFilterChange} />

        {isShowList && (
          <SC.CatalogList>
            {itemsCars.map((car) => (
              <li key={car.id}>
                <CarList car={car} />
              </li>
            ))}
          </SC.CatalogList>
        )}

        {isShowButton && (
          <SC.BtnLoadMore type="button" onClick={handleLoadMore}>
            Load more
          </SC.BtnLoadMore>
        )}

        {isLoading && !error && (
          <div
            style={{
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 500,
              color: '#3470ff',
              margin: '100px auto 0',
            }}
          >
            Loading
          </div>
        )}
        {error && error}
      </SC.Container>
    </section>
  );
};

export default CatalogPage;
