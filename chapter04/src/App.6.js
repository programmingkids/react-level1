import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const kuji = ['大吉','中吉','小吉','吉','凶'];
  
  const [omikuji, setOmikuji] = useState('');
  
  const handleClick = (event) => {
    const min = 0;
    const max = kuji.length -1;
    const randomNum = getRandomNumber(min,max);
    setOmikuji(kuji[randomNum]);
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

const OmikujiBox = (props) => (
  <div>今日の運勢：{props.omikuji}</div>
);

const Title = (props) => <h1>{props.children}</h1>;

export default App;
