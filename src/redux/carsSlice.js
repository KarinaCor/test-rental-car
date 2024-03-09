import { createSlice } from '@reduxjs/toolkit';
import { allCars, LoadMoreCars } from '../redux/carsOperation';

const carsInitialState = {
  itemsCars: [],
  favoriteCars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,

  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteCars = [...state.favoriteCars, action.payload];
    },

    removeFromFavorites: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        car => car.id !== action.payload.id
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(allCars.pending, handlePending)
      .addCase(allCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemsCars = action.payload;
      })
      .addCase(allCars.rejected, handleRejected)

      .addCase(LoadMoreCars.pending, handlePending)
      .addCase(LoadMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemsCars = [...state.itemsCars, ...action.payload];
      })
      .addCase(LoadMoreCars.rejected, handleRejected);
  },
});

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
