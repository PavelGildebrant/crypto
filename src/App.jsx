import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './pages/main/Glav';
import { getCoins } from './api/api';

function App() {
  const [balance, setBalance] = useState(6000);
  const [coins, setCoins] = useState([]);
const [filteredCoins,setFilteredCoins]=useState([])

  useEffect(
    /*хук для управления жизненными циклами компонента,
    когда изменяется компонент выполняется функция внутри*/
    () => {
      const fetchData = async () => {
        const data = await getCoins();

        setCoins(data.coins);
      };
      fetchData();
    },
    [] /*массив зависимостей,указывает что именно должно изменяться*/
  );

  return (
    <>
      <Header />
      <Main
        balance={balance}
        setBalance={setBalance}
        coins={coins}
        setCoins={setFilteredCoins}
        filteredCoins={filteredCoins}
    
        /*передача  пропсом внутрь компонента*/
      />
    </>
  );
}

export default App;
