const API_KEY = '5BAF77VT99CBXI68';

export async function fetchStockPrice(symbol) {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const price = data['Global Quote']['05. price'];
    return parseFloat(price);
  } catch (error) {
    console.error('Error fetching stock price', error);
    return null;
  }
}
