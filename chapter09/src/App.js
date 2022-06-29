import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState({
    item : '',
    amount : '',
  });
  
  const [list, setList] = useState([]);
  
  const handleChange = (event) => {
    const newData = {...data};
    newData[event.target.id] = event.target.value;
    setData(prevData => newData);
  };
  
  const handleClick = (event) => {
    setList(list => list.concat(data));
    
    setData({
      item : '',
      amount : '',
    });
  };
  
  return (
    <div className="App">
    <Title>ショッピングリスト</Title>
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
      商品：
      <input 
        type="text" 
        id="item" 
        autoComplete="off" 
        onChange={handleChange}
        value={data.item}
      />
    </div>
    <div>
      個数：
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
      <th>商品</th>
      <th>個数</th>
    </tr>
  </thead>
);

const TableRow = (props) => {
  const {item, amount} = props.row;
  return (
    <tr>
      <td>{item}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default App;
