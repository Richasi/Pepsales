// src/components/StockList.js
import React, { useState } from 'react';
import { stocks } from '../data/stocks';
import { Link } from 'react-router-dom';

const StockList = () => {
  const [stockData, setStockData] = useState(stocks);

  return (
    <div className="stock-list">
      <h1>Stock Prices</h1>
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td>{stock.change}</td>
              <td><Link to={`/stock/${stock.id}`}>View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
