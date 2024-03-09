// import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//   filter: null,
//   filterCars: [],
// };

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     filterSet(state, { payload }) {
//       state.filter = payload;
//     },
//     filterDelete(state, { payload }) {
//       state.filter = null;
//     },
//     filterCarsSet(state, { payload }) {
//       state.filterCars = payload;
//     },
//   },
// });

// export const filterReducer = filterSlice.reducer;

// export const { filterSet, filterCarsSet, filterDelete } = filterSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = '';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     filterChange: (state, { payload }) => {
//       return (state = payload);
//     },
//   },
// });

// export const { filterChange } = filterSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carBrand: {},
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addToCarBrand: (state, { payload }) => {
      state.carBrand = payload;
    },
  },
});

export const { addToCarBrand } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
