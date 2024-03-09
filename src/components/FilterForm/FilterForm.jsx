

import  { useState } from 'react';

// import { useSelector } from 'react-redux';
import makes from '../../components/data/makes.json';
// import CarList from 'components/CarList/CarList';
import * as SC from '../../components/FilterForm/FilterForm.styled';

const FilterForm = ({ onFilterChange }) => {
  const [makeFilter, setMakeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setMakeFilter(make);
    onFilterChange({ make, price: priceFilter });
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setPriceFilter(price);
    onFilterChange({ make: makeFilter, price });
  };

  const filterOptions = (item) => ({
    value: item,
    label: item,
  });

      const price = [10, 20, 30, 40, 50, 60];

    const priceOptions = (item) => ({
      value: item,
      label: item,
    });

  return (
    <SC.Wrapper>
      <SC.ModelWrapper>
        <SC.SelectLabel>Car brand</SC.SelectLabel>
        <SC.SelectModal
          placeholder="Enter the Text"
          value={makeFilter}
          onChange={handleMakeChange}
          options={makes.map(filterOptions)}
        >
          {/* Options for car brands */}
        </SC.SelectModal>
      </SC.ModelWrapper>
      <SC.PriceWrapper>
        <SC.SelectLabel>Price/ 1 hour</SC.SelectLabel>
        <SC.SelectPrice
          value={priceFilter}
          onChange={handlePriceChange}
          options={price.map(priceOptions)}
        ></SC.SelectPrice>
      </SC.PriceWrapper>
      <SC.ButtonSearch>Search</SC.ButtonSearch>
    </SC.Wrapper>
  );
};

export default FilterForm;


// const FilterForm = () => {

//    const [makeFilter, setMakeFilter] = useState('');
//    const [priceFilter, setPriceFilter] = useState('');

//    const handleMakeChange = e => {
//      setMakeFilter(e.target.value);
//    };

//    const handlePriceChange = e => {
//      setPriceFilter(e.target.value);
//    };

//    const filterOptions = (item) => ({
//      value: item,
//      label: item,
//    });

//     const price = [10, 20, 30, 40, 50, 60];

//   const priceOptions = (item) => ({
//     value: item,
//     label: item,
//   });

//    return (
//      <SC.Wrapper>
//        <SC.ModelWrapper>
//          <SC.SelectLabel>Car brand</SC.SelectLabel>
//          <SC.SelectModal
//            placeholder="Enter the Text"
//            value={makeFilter}
//            onChange={handleMakeChange}
//            options={makes.map(filterOptions)}
//          />
//        </SC.ModelWrapper>
//        <SC.PriceWrapper>
//          <SC.SelectLabel>Price/ 1 hour</SC.SelectLabel>
//          <SC.SelectPrice
//            type="text"
//            placeholder="To $"
//            value={priceFilter}
//            onChange={handlePriceChange}
//            options={price.map(priceOptions)}
//          />
      
      
//        </SC.PriceWrapper>
//        <SC.ButtonSearch>Search</SC.ButtonSearch>
//      </SC.Wrapper>
//    );





  //  const itemsCars = useSelector(selectItemsCars);
  //  const [makeFilter, setMakeFilter] = useState('');
  //  const [priceFilter, setPriceFilter] = useState('');

  //  const handleMakeChange = e => {
  //    setMakeFilter(e.target.value);
  //  };

 

  //  const handlePriceChange = e => {
  //    setPriceFilter(e.target.value);
  //  };

  //  const filteredData = itemsCars.filter(car => {
  //    // Filter based on make, model, and price
  //    return (
  //      car.make.toLowerCase().includes(makeFilter.toLowerCase()) &&
  //      (car.price ? car.price.toString().includes(priceFilter) : false)
  //    );
  //  });

  //  // Get unique make values
  //  const uniqueMakes = [...new Set(itemsCars.map(car => car.make))];

  //  return (
  //    <div>
  //      <select value={makeFilter} onChange={handleMakeChange}>
  //        <option value="">Enter the text</option>
  //        {uniqueMakes.map((make, index) => (
  //          <option key={index} value={make}>
  //            {make}
  //          </option>
  //        ))}
  //      </select>

  //      <input
  //        type="text"
  //        placeholder="Filter by price"
  //        value={priceFilter}
  //        onChange={handlePriceChange}
  //      />
  //      <ul>
  //        {filteredData.map(item => (
  //          <li key={item.id}>
  //            <CarList car={item} />
  //          </li>
  //        ))}
  //      </ul>
  //      <SC.CatalogList>
  //        {itemsCars.map(car => (
  //          <li key={car.id}>
  //            <CarList car={car} />
  //          </li>
  //        ))}
  //      </SC.CatalogList>
  //    </div>
  //  );


  // const itemsCars = useSelector(selectItemsCars);
  // const [makeFilter, setMakeFilter] = useState('');
  // const [modelFilter, setModelFilter] = useState('');
  // const [priceFilter, setPriceFilter] = useState('');

  // const handleMakeChange = (e) => {
  //   setMakeFilter(e.target.value);
  // };

  // const handleModelChange = (e) => {
  //   setModelFilter(e.target.value);
  // };

  // const handlePriceChange = (e) => {
  //   setPriceFilter(e.target.value);
  // };

  // const filteredData = itemsCars.filter(item => {
  //   // Filter based on make, model, and price
  //   return (
  //     item.make.toLowerCase().includes(makeFilter.toLowerCase()) &&
  //     item.model.toLowerCase().includes(modelFilter.toLowerCase()) &&
  //     (item.price ? item.price.toString().includes(priceFilter) : false)
  //   );
  // });

  // // Get unique make values
  // const uniqueMakes = [...new Set(itemsCars.map(item => item.make))];

  // return (
  //   <div>
  //     <select value={makeFilter} onChange={handleMakeChange}>
  //       <option value="">Select Make</option>
  //       {uniqueMakes.map((make, index) => (
  //         <option key={index} value={make}>
  //           {make}
  //         </option>
  //       ))}
  //     </select>
  //     <input
  //       type="text"
  //       placeholder="Filter by model"
  //       value={modelFilter}
  //       onChange={handleModelChange}
  //     />
  //     <input
  //       type="text"
  //       placeholder="Filter by price"
  //       value={priceFilter}
  //       onChange={handlePriceChange}
  //     />
  //     <ul>
  //       {filteredData.map(item => (
  //         <li key={item.id}>
  //           <CarList car={item} />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
// }
  // const itemsCars = useSelector(selectItemsCars);
  // const [makeFilter, setMakeFilter] = useState('');
  // const [priceFilter, setPriceFilter] = useState('');

  // const handleMakeChange = e => {
  //   setMakeFilter(e.target.value);
  // };



  // const handlePriceChange = e => {
  //   setPriceFilter(e.target.value);
  // };

  // const filteredData = itemsCars.filter(item => {
   
  //   return (
  //     item.make.toLowerCase().includes(makeFilter.toLowerCase()) &&
  //     item.rentalPrice.toString().includes(priceFilter)
  //   );
  // });

  // return (
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="Filter by make"
  //       value={makeFilter}
  //       onChange={handleMakeChange}
  //     />

  //     <input
  //       type="text"
  //       placeholder="Filter by price"
  //       value={priceFilter}
  //       onChange={handlePriceChange}
  //     />
  //     <ul>
  //       {filteredData.map(item => (
  //         <li key={item.id}>
  //           <CarList car={item} />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
// }

// export default FilterForm;
