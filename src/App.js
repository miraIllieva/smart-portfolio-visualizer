import React, { useState } from 'react';
import StockInputForm from './components/StockInputForm';
import PortfolioChart from './components/PortfolioChart';
import { fetchStockPrice } from './services/stockService';

function App() {
  const [portfolio, setPortfolio] = useState([]);
  const [error, setError] = useState('');

  const handleAddStock = async (stock) => {
    const price = await fetchStockPrice(stock.symbol);
    if (price) {
      setPortfolio([...portfolio, { ...stock, price }]);
      setError('');
    } else {
      setError('Could not fetch price for ' + stock.symbol);
    }
  };

  // ✅ START of return
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Smart Portfolio Visualizer</h1>
      <StockInputForm onSubmit={handleAddStock} />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {portfolio.map((item, index) => (
          <li key={index}>
            {item.symbol} — {item.shares} shares @ ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* ✅ Total Value */}
      {portfolio.length > 0 && (
        <>
          <h3>
            Total Value: $
            {portfolio
              .reduce((total, stock) => total + stock.price * stock.shares, 0)
              .toFixed(2)}
          </h3>
          <PortfolioChart portfolio={portfolio} />
        </>
      )}
    </div>
  );
  // ✅ END of return
}

export default App;
