export const selectItemsCars = state => state.cars.itemsCars; 
export const selectFavoriteCars = state => state.cars.favoriteCars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

// export const selectFilter = state => state.filter.filter;
// export const selectFilterCars = state => state.filter.filterCars;
export const selectCarBrands = (store) => store.filters.carBrand;
