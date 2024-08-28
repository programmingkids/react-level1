import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = function (event) {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Title>カウントアップ</Title>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>{count}</div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
