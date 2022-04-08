const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coins
}

const setCoins = async () => {
  const coins = await fetchCoins();
  const coinsList = document.querySelector('#coins')

  coins.filter((rank) => (rank.rank <= 10)).forEach((coin) => {
    const { name, symbol, priceUsd } = coin;
    let elemento = document.createElement('li');
    elemento.innerHTML = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`
    coinsList.appendChild(elemento);
  })
}

window.onload = () => setCoins();

