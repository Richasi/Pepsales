// src/components/StockDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { stocks } from '../data/stocks';

const StockDetail = () => {
  const { id } = useParams();
  const stock = stocks.find((s) => s.id === parseInt(id));

  return (
    <div className="stock-detail">
      <h2>{stock.name} Details</h2>
      <p><strong>Price:</strong> {stock.price}</p>
      <p><strong>Change:</strong> {stock.change}</p>
      <div className="graph">
        <h3>Price Movement (Graph) [Optional]</h3>
        <div style={{ height: '300px', backgroundColor: '#e4e4e4', textAlign: 'center', lineHeight: '300px' }}>
          Graph would go here
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
