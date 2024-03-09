import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e7760253d564627a8ed9eb.mockapi.io/';

const LIMIT = 12;

export const allCars = createAsyncThunk(
  'cars/allCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=${LIMIT}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const LoadMoreCars = createAsyncThunk(
  'cars/LoadMoreCars',
  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?limit=${LIMIT}&page=${currentPage}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
