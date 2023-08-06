import Card from '../../components/card/Card';
import styles from './main.module.css';
import CoinsList from '../../components/coins-list/CoinsList';
import FilterBlock from '../../components/Filter-block/FilterBlock';
const Main = (
  {
    balance,
    setBalance,
    coins,setCoins,filteredCoins
  } /*принимает баланс с деструктуризацией ,бeз скобочек просто props*/
) => {
  return (
    <main
      /*передача баланса пропсом внутрь компонента*/ className={styles.main}>
      <Card balance={balance} setBalance={setBalance} coins={coins} />
      <FilterBlock coins={coins} setCoins={setCoins}/>
      {coins.length > 0 ? <CoinsList coins={filteredCoins} /> : <div>loading</div>}
    </main>
  );
};

export default Main;
