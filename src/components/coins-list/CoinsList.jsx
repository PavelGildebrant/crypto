import styles from './coinsList.module.css';
const CoinsList = ({ coins }) => {
  return (
    <ul className={styles.coinList}>
      {coins.map((coin) => {
        return (
          <li className={styles.coinItem} key={coin.uuid}>
            <div className={styles.coinItemInfo}>
              <img
                className={styles.coinItemLogo}
                src={coin.iconUrl}
                alt={coin.name}
              />
              <p style={{ color: coin.color }}>{coin.name}</p>
            </div>
            <div className={styles.coinItemPrice}>
              <p style={{ color: coin.color }}>{(+coin.price).toFixed(2)} USD</p>
              <p style={{ color: coin.color }}>{(+coin.btcPrice).toFixed(2)} BTC</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CoinsList;
