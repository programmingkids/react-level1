import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [number, setNumber] = useState({
    result : '',
    resultList : [],
  });
  
  const handleClick = (event) => {
    const min = 10000;
    const max = 99999;
    const result = getRandomNumber(min,max);
    const resultList = number.resultList.concat([result]);
    
    setNumber(number => ({result, resultList}));
  };
  
  return (
    <div className="App">
      <Title>ランダムな数値</Title>
      <div>
        <button onClick={handleClick}>数値を見る</button>
      </div>
      <NumberBox result={number.result} />
      <hr />
      <ResultBox resultList={number.resultList} />
    </div>
  );
}

const NumberBox = (props) => (
  <div>ランダムな数値：{props.result}</div>
);

const ResultBox =(props) => (
  <div className="my-list">
  {props.resultList.map((value, index) => <ResultItem key={index} value={value} />)}
  </div>
);

const ResultItem = (props) => (
  <li>{props.value}</li>  
);

const Title = (props) => <h1>{props.children}</h1>;

export default App;
