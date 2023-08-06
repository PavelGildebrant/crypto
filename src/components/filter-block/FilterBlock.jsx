import { useState, useEffect,  } from 'react';
import styles from './filterBlock.module.css';
const FilterBlock = ({ coins, setCoins }) => {
  const [value, setValue] = useState('');


  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value.toLowerCase());
    });
    setCoins(filteredCoins);
  }, [value]);

  return (
    <div className={styles.block}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={styles.input}
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default FilterBlock;
