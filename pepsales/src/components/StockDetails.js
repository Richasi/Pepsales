import React from 'react';
import { useParams } from 'react-router-dom';
import Graph from './Graph';

const StockDetails = () => {
    const { id } = useParams();

    // Mock data for details, replace with real API call if needed
    const stock = {
        id,
        name: 'Mock Stock',
        price: 1200,
        details: 'Stock details here.',
    };

    return (
        <div>
            <h1>{stock.name}</h1>
            <p>Price: {stock.price}</p>
            <p>{stock.details}</p>
            <Graph />
        </div>
    );
};

export default StockDetails;
