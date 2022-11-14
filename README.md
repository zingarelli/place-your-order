# Project Details

This web application is a checkout system that could be running, for example, in a self-service totem at a supermarket or a fast-food restaurant.

In this app, the user can view and select products from a Menu. Once an item is selected, it is displayed in the Basket. The user can then add more of the same item either by selecting it again in the Menu or by touching the "+" button available next to the item's name in the Basket. The Basket also has a "-" button to decrease the quantity of an item and a "X" button to remove an item from the Basket.

Once the user finishes the order, s/he can touch the "Checkout" button. A Panel will be displayed with a summary of the order. For each item, it will be shown quantity, name, and price. It will also be shown the total price of the order, how much the user is saving with promotions applied to the items and how much the user has to pay. The user can then either confirm the order or modify it. 

If the user touches the "Confirm" button, a success message is displayed, the Panel is closed after 5 seconds and the Basket is emptied. If the user touches the "Modify order" button, the Panel is closed and the Menu and Basket with the selected items are shown again.

Products and promotions data are retrieved from an API. In the `/wiremock` folder there is a mocked JSON API with the appropriated responses to get these data. 

# Installing and Running the Project

## React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using Node.js (version v16.15.1) and npm (version 8.11.0). You need Node.js and npm installed in order to run this project.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

`npm install`

After that, you can run the app in the development mode with the following command:

`npm start`

The app will run at [http://localhost:3000](http://localhost:3000).

## WireMock

You need WireMock server running in order to display product information in the app. For that, open a new terminal, navigate to `/wiremock` folder and run the following command:

`./start.sh`

WireMock server can be stopped with the following command:

`./stop.sh`

## Tests

The project uses Jest framework to perform a few tests in the React Components created. You can run them with the following command:

`npm test`

This will launch the test runner in the interactive watch mode (tests will run every time there's a change in the source code).

# Screenshots

## Screen showing products in the Menu and in the Basket
![Screen showing products in the Menu and in the Basket](https://user-images.githubusercontent.com/19349339/201770944-210e7972-538c-46f1-aec2-a3ce09a026d5.png)

## Screen showing checkout information
![Screen showing checkout information](https://user-images.githubusercontent.com/19349339/201771104-8e0f56fc-b3dc-4e3b-9dc0-d7fb9acbd9d6.png)