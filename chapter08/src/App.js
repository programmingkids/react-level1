import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState({
    item : '',
    payment : '',
    amount : '',
    balance : 0,
  });
  
  const [list, setList] = useState([]);
  
  let [balance, setBalance] = useState(0);
  
  const handleChange = (event) => {
    const newData = {...data};
    newData[event.target.id] = event.target.value;
    setData(prevData => newData);
  };
  
  const handleClick = (event) => {
    if(data.payment === 'in') {
      balance += parseInt(data.amount);
    } else {
      balance -= parseInt(data.amount);
    }
    data.balance = balance;
    setList(list => list.concat(data));
    setBalance(prevBalance => balance);
    
    setData({
      item : '',
      payment : '',
      amount : '',
      balance : 0,
    });
  };
  
  return (
    <div className="App">
    <Title>お小遣い帳</Title>
    <ControlBox 
      handleChange={handleChange} 
      handleClick={handleClick}
      data={data}
    />
    <TableBox list={list} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const ControlBox = ({handleChange, handleClick, data}) => (
  <div id="control">
    <div>
      項目：
      <input 
        type="text" 
        id="item" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.item}
      />
    </div>
    <div>
      入出金：
      <select 
        id="payment" 
        onChange={handleChange} 
        value={data.payment}
      >
        <option value="">選択</option>
        <option value="in">入金</option>
        <option value="out">出金</option>
      </select>
    </div>
    <div>
      金額：
      <input 
        type="number" 
        id="amount" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.amount}
      />
    </div>
    <div>
      <button onClick={handleClick}>登録</button>
    </div>
  </div>
);

const TableBox = (props) => (
  <table className="my-table">
    <TableHeader />
    <tbody>
    {props.list.map((row, index) => <TableRow key={index} row={row} />)}
    </tbody>
  </table>
);

const TableHeader = () => (
  <thead>
    <tr>
      <th>項目</th>
      <th>入金</th>
      <th>出金</th>
      <th>残金</th>
    </tr>
  </thead>
);

const TableRow = (props) => {
  const {item, payment, amount, balance} = props.row;
  return (
    <tr>
      <td>{item}</td>
      <td>{payment === 'in' ? amount  : ''}</td>
      <td>{payment === 'out' ? amount  : ''}</td>
      <td>{balance}</td>
    </tr>
  );
};

export default App;
