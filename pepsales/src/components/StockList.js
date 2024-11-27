import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/actions';
import { Link } from 'react-router-dom';

const StockList = () => {
    const dispatch = useDispatch();
    const { stocks, loading, error } = useSelector((state) => state.stock);

    useEffect(() => {
        dispatch(fetchStocks());
    }, [dispatch]);

    const loadMore = () => {
        dispatch(fetchStocks(stocks.length));
    };

    return (
        <div>
            <h1>Live Stock Prices</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.id}>
                        <Link to={`/stocks/${stock.id}`}>
                            {stock.name}: {stock.price}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={loadMore}>Load More</button>
        </div>
    );
};

export default StockList;
