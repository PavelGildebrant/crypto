import styles from './card.module.css';
const Card = (
  {
    balance,
    setBalance,
  } /*принимает баланс с деструктуризацией ,бeз скобочек просто props*/
) => {
  return (
    <div className={styles.card}>
      <div className={styles.balance}>
        <p>crypto-finance</p>
        <button onClick={() => setBalance((prev) => prev - 1000)}>
          add money
        </button>
      </div>
      <div className={styles.balance}>
        <p>Ruslan</p>
        <p>{balance}</p>
      </div>
    </div>
  );
};

export default Card;
