import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleCountUp = (event) => {
    setCount((count) => count + 1);
  };

  const handleCountDown = (event) => {
    setCount((count) => count - 1);
  };

  const handleCountReset = (event) => {
    setCount((count) => 0);
  };

  return (
    <div className="App">
      <Title>カウント</Title>
      <div>
        <button onClick={handleCountUp}>Up</button>
        <button onClick={handleCountDown}>Down</button>
        <button onClick={handleCountReset}>Reset</button>
      </div>
      <div>{count}</div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
