import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    item: '',
    payment: '',
    amount: '',
    balance: 0,
  });

  const [list, setList] = useState([]);

  const [balance, setBalance] = useState(0);

  return (
    <div className="App">
      <Title>お小遣い帳</Title>
      <ControlBox />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const ControlBox = () => (
  <div id="control">
    <div>
      項目：
      <input type="text" id="item" autoComplete="off" />
    </div>
    <div>
      入出金：
      <select id="payment">
        <option value="">選択</option>
        <option value="in">入金</option>
        <option value="out">出金</option>
      </select>
    </div>
    <div>
      金額：
      <input type="number" id="amount" autoComplete="off" />
    </div>
    <div>
      <button>登録</button>
    </div>
  </div>
);

export default App;
