import './App.css';
import { useState } from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const kujiData = ['大吉', '中吉', '小吉', '吉', '凶'];

  const [omikuji, setOmikuji] = useState({
    result: '',
    resultList: [],
  });

  const handleClick = (event) => {
    const min = 0;
    const max = kujiData.length - 1;
    const randomNumber = getRandomNumber(min, max);
    const result = kujiData[randomNumber];
    const resultList = omikuji.resultList.concat([result]);

    setOmikuji((omikuji) => ({ result, resultList }));
  };

  return (
    <div className="App">
      <Title>おみくじ</Title>
      <div>
        <button onClick={handleClick}>くじを見る</button>
      </div>
      <OmikujiBox result={omikuji.result} />
      <hr />
      <ResultBox resultList={omikuji.resultList} />
    </div>
  );
}

const OmikujiBox = (props) => <div>今日の運勢：{props.result}</div>;

const ResultBox = (props) => (
  <div className="my-list">
    {props.resultList.map((value, index) => (
      <ResultItem key={index} value={value} />
    ))}
  </div>
);

const ResultItem = (props) => <li>{props.value}</li>;

const Title = (props) => <h1>{props.children}</h1>;

export default App;
