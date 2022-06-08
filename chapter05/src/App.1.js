import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Title>自動カウントアップ</Title>
      <CountBox />
    </div>
  );
}

const CountBox = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
  });
  
  return <div>カウント：{count}</div>;
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
