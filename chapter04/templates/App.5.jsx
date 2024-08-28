import './App.css';
import { useState } from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const colorData = ['red', 'blue', 'green', 'yellow', 'pink', 'orange'];

  const [color, setColor] = useState(colorData[0]);

  const handleClick = (event) => {
    const min = 0;
    const max = colorData.length - 1;

    const randomNumber = getRandomNumber(min, max);
    const newColor = colorData[randomNumber];

    setColor((color) => newColor);
  };

  return (
    <div className="App">
      <Title>ランダムな色</Title>
      <button onClick={handleClick}>ランダムな色に変更</button>
      <hr />
      <div id="colorBox" className={color}></div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
