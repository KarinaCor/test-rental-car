Застосунок для автопрокатної компанії
Огляд
Цей застосунок складається з трьох частин:
 1: Загальний огляд послуг, що надає компанія.
 2: Каталог різних моделей автомобілів, які можна взяти в оренду, з можливістю фільтрації за маркою, ціною за годину прокату та пробігом.
 3: Перегляд оголошень, які були додані в користувацькі обрані.
Кожена частина має власну назву та характеристики, а також хедер з меню, основну область перегляду інформації.

Головна сторінка
Ця частина має заголовок, що коротко описує послугу, а також посилання на каталог автомобілів.
При необхідності, можуть бути додані частини, що представляють інформацію про компанію, докладний опис послуг та умови прокату автомобіля.

Частина про каталог автомобілів
Ця частина містить карти автомобілів, які доступні для оренди.
При відкритті, перші 12 оголошень про оренду автомобіля відображаються.
Після цього можна завантажити на сторінку ще 12 оголошень за допомогою кнопки "Load More", яка знаходиться під списком оголошень.
Коли всі оголошення вже завантажені, кнопка "Load More" зникає.
При кліку на кнопку з символом серця на картці оголошення, воно додається до списку улюблених, а колір кнопки змінюється.

Частина про улюблені оголошення
Відображаються оголошення, які були додані в користувацькі улюблені.
Якщо немає жодного улюбленого оголошення, відображається порожня сторінка з пропозицією перейти до каталогу автомобілів.

Маршрутизація, використовуючи React Router. У застосунку такі маршрути:
“/” - домашня сторінка з загальним описом послуг, що надає компанія
“/catalog” - сторінка, що містить каталог автівок різної комплектації
“/favorites” - сторінка з оголошеннями, які були додані користувачем в улюблені.
 Для роботи зі списком оголошень створений персональний бекенд для розробки за допомогою UI-сервісу https://mockapi.io/.
 Advert:
Створено advert в Mockapi з наступними полями: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage (див. скріншот нижче). Для наповнення колекції можна взяти adverts.json
Зображення авто можете підібрати самостійно.









