# Pepsales - Stock Price Tracker

This is a simple React application that displays the live stock prices of 20 companies, with details and price movement graphs. It uses Redux for state management and React Router for navigation.
## deploy link
https://pepsales-omega.vercel.app/

<img width="578" alt="Screenshot 2024-11-26 191151" src="whatsappWeb\public\Screenshot (175).png">

## Features

- Display live stock prices of companies from a static data source.
- View detailed stock information and price details on click.
- Lazy loading for loading more stocks as you scroll (optional).
- Graph showing today's price movement (optional).
- Redux for managing state and handling actions.

## Tech Stack

- **React**: Frontend library for building the UI.
- **Redux**: State management for handling the app's state.
- **React Router**: For navigating between pages.
- **CSS**: Basic styling to make the application visually appealing.
- **Chart.js** (optional): For displaying the price movement graph.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Richasi/Pepsales
    ```

2. **Install dependencies**:

    Navigate to the project directory and install the required packages:

    ```bash
    cd pepsales
    npm install
    ```

3. **Start the development server**:

    To start the application, run:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. Upon loading, the app will display the list of stock prices for 20 companies.
2. You can click on any stock to view more details, including price information and today's price movement.
3. The application supports lazy loading, so as you scroll, more stocks will be loaded dynamically.

## Redux Setup

1. **Actions**: Define actions that interact with the Redux store.
2. **Reducers**: Define reducers to manage how the store is updated.
3. **Store**: The Redux store holds the state of the application, including the list of stocks and their details.

## File Structure

src/
 ├── components/ │ ├── StockList.js │ ├──   StockDetail.js 
 ├── data/ │ ├── stocks.js ├── redux/ │ ├── actions.js │ ├── reducers.js │ ├── store.js ├── App.js ├── index.js ├── index.css

 
## Assumptions

- The stock prices are sourced from a static data file.
- Lazy loading is optional but implemented for performance.
- Price movement graphs (optional) can be implemented using libraries like Chart.js.

## Libraries Used

- **react-router-dom**: For page routing.
- **redux**: For managing global state.
- **react-redux**: For connecting React components to Redux store.
- **Chart.js** (optional): For displaying the stock price movement graph.

## Contributing

Feel free to fork this repository and make your improvements. If you'd like to contribute, please create a pull request with a clear explanation of what you've done.

## License

This project is open-source and available under the [MIT License](LICENSE).
