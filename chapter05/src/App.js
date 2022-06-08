import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  return (
    <div className="App">
      <Title>おみくじ</Title>
      <OmikujiBox />
    </div>
  );
}

const OmikujiBox = () => {
  const kujiData = ['大吉','中吉','小吉','吉','凶'];
  
  const [result, setResult] = useState('');
  const [resultList, setResultList] = useState([]);
  
  const handleClick = (event) => {
    const min = 0;
    const max = kujiData.length -1;
    const randomNumber = getRandomNumber(min,max);
    setResult(result => kujiData[randomNumber]);
  };
  
  const handleClickReset = (event) => {
    setResultList([]);
  };
  
  useEffect(() => {
    if(result === '') {
      return;
    }
    setResultList(resultList => resultList.concat([result]));
  },[result]);
  
  return (
    <div>
      <div>
        <button onClick={handleClick}>くじを見る</button>
        <button onClick={handleClickReset}>履歴のリセット</button>
      </div>
      <Result result={result} />
      <hr />
      <ResultBox resultList={resultList} />
    </div>
  );
};

const Result = (props) => (
  <div>今日の運勢：{props.result}</div>
);

const ResultBox =(props) => (
  <div className="my-list">
  <h2>おみくじの履歴</h2>
  {props.resultList.map((value, index) => <ResultItem key={index} value={value} />)}
  </div>
);

const ResultItem = (props) => (
  <li>{props.value}</li>  
);

const Title = (props) => <h1>{props.children}</h1>;

export default App;
