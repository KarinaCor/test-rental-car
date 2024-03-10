Car Rental Application


Overview


This application consists of three parts:


1: General overview of the services provided by the company.


2: Catalog of different car models available for rent, with the ability to filter by brand, hourly rental price, and mileage.


3: Viewing advertisements that have been added to the user's favorites.


Each part has its own title and characteristics, as well as a header with a menu and the main area for viewing information.


Home Page


This part has a title briefly describing the service, as well as a link to the car catalog. If necessary, sections providing information about the company, detailed service descriptions, and rental terms can be added.

Catalog Section


This section contains cards of cars available for rent. Upon opening, the first 12 car rental advertisements are displayed. After this, you can load 12 more advertisements onto the page using the "Load More" button located below the list of advertisements. When all advertisements have been loaded, the "Load More" button disappears. Clicking the heart button on an advertisement card adds it to the favorites list, and the button color changes.

Favorites Section


Advertisements added to the user's favorites are displayed in this section. If there are no favorite advertisements, a blank page is displayed with a suggestion to go to the car catalog.

Routing using React Router. The following routes are used in the application:


"/" - home page with a general description of the services provided by the company


"/catalog" - page containing a catalog of cars of various models


"/favorites" - page with advertisements that have been added by the user to favorites.


A custom backend has been created to work with the list of advertisements using the UI service https://mockapi.io/.


Advert:


An advert has been created in Mockapi with the following fields: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage. You can use adverts.json to populate the collection. You can choose the car images yourself.
