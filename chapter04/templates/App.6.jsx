import './App.css';
import { useState } from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const kujiData = ['大吉', '中吉', '小吉', '吉', '凶'];

  const [omikuji, setOmikuji] = useState('');

  const handleClick = (event) => {
    const min = 0;
    const max = kujiData.length - 1;
    const randomNumber = getRandomNumber(min, max);
    const newOmikuji = kujiData[randomNumber];

    setOmikuji((omikuji) => newOmikuji);
  };

  return (
    <div className="App">
      <Title>おみくじ</Title>
      <div>
        <button onClick={handleClick}>くじを見る</button>
      </div>
      <OmikujiBox omikuji={omikuji} />
    </div>
  );
}

const OmikujiBox = (props) => <div>今日の運勢：{props.omikuji}</div>;

const Title = (props) => <h1>{props.children}</h1>;

export default App;
