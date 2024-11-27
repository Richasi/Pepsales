// src/redux/actions.js
export const setStocks = (stocks) => {
    return {
      type: 'SET_STOCKS',
      payload: stocks,
    };
  };
  