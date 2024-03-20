// src/components/BitcoinPrice.js
import React from 'react';
import useFetch from '../Component/useFetch';

const BitcoinPrice = () => {
  const { data, loading, error } = useFetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { bpi } = data;

  return (
    <div>
      <h3>Bitcoin Price</h3>
      <ul>
        {Object.entries(bpi).map(([currency, { rate }]) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BitcoinPrice;
