import './App.css';
import { useState, useEffect } from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  return (
    <div className="App">
      <Title>3の倍数判定</Title>
      <NumberBox />
    </div>
  );
}

const NumberBox = () => {
  const [number, setNumber] = useState();
  const [message, setMessage] = useState('');

  const handleClick = (event) => {
    const number = getRandomNumber(1, 100);
    setNumber((prevNumber) => number);
  };

  useEffect(() => {
    if (number === undefined) {
      setMessage('');
    } else if (number % 3 === 0) {
      setMessage('3の倍数です');
    } else {
      setMessage('3の倍数ではありません');
    }
  }, [number]);

  return (
    <div>
      <button onClick={handleClick}>数値作成</button>
      <div>数値：{number}</div>
      <div>判定：{message}</div>
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
