import React, { useState } from 'react';

function StockInputForm({ onSubmit }) {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol && shares) {
      onSubmit({ symbol: symbol.toUpperCase(), shares: parseInt(shares) });
      setSymbol('');
      setShares('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Stock Symbol (e.g., AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Number of Shares"
        value={shares}
        onChange={(e) => setShares(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default StockInputForm;
