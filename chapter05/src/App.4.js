import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Title>日時</Title>
      <ClockBox />
    </div>
  );
}

const ClockBox = () => {
  const [display, setDisplay] = useState(true);
  
  const handleToggleDisplay = (event) => {
    setDisplay((value) => !value);
  };
  
  return (
    <div>
      <button onClick={handleToggleDisplay}>表示</button>
      {display && <Clock />}
    </div>
  );
};

const Clock = () => {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    },1000);
    
    return () => {
      clearInterval((timerID));
    };
  },[]);
  
  return (
    <div className="clock">
      日時: <span className="date">{date.toLocaleString()}</span>
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
