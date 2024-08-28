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
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
