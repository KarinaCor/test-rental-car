export const selectItemsCars = state => state.cars.itemsCars; 
export const selectFavoriteCars = state => state.cars.favoriteCars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;


export const selectCarBrands = (store) => store.filters.carBrand;
