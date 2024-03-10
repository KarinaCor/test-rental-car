export const getCityFromAddress = advert => {
  return advert.address.split(',')[1];
};

export const getCountryFromAddress = advert => {
  return advert.address.split(',')[2];
};

export const getMinAge = advert => {
  const conditionsArray = advert.rentalConditions.split('\n');
  const [key, value] = conditionsArray[0].split(': ');
  return {
    key,
    value,
  };
};

export const getDriverLicense = advert => {
  const conditionsArray = advert.rentalConditions.split('\n');
  return conditionsArray[1];
};

export const getSecurityDeposit = advert => {
  const conditionsArray = advert.rentalConditions.split('\n');
  return conditionsArray[2];
};

export const getFormatMileage = advert => {
  return advert.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};



export const getFormatRentalPrice = (advert) => {
  if (
    !advert ||
    typeof advert.rentalPrice !== 'string' ||
    advert.rentalPrice.length < 2
  ) {
    return null; // Return null if advert object is invalid or rentalPrice is not a valid string
  }

  const currencySymbol = advert.rentalPrice.charAt(0); // Get the currency symbol
  const numericPart = advert.rentalPrice.slice(1); // Get the numeric part of the rental price

  // Format the rental price with the currency symbol
  return `${numericPart}${currencySymbol}`;
};






export const pricesArray = [
  { value: 'all', label: 'All price' },
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 30, label: 30 },
  { value: 40, label: 40 },
  { value: 50, label: 50 },
  { value: 60, label: 0 }
];
