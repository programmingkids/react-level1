import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Title>自動カウントアップと表示切替</Title>
      <CountBox />
    </div>
  );
}

const CountBox = () => {
  const [display, setDisplay] = useState(true);

  const handleToggleDisplay = (event) => {
    setDisplay((value) => !value);
  };

  return (
    <div>
      <button onClick={handleToggleDisplay}>表示切替</button>
      {display && <Count />}
    </div>
  );
};

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      setCount((count) => 0);
      clearInterval(timerID);
    };
  }, []);

  return <div>カウント：{count}</div>;
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
