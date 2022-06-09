import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [message, setMessage] = useState('What\'s up?');
  
  const handleClick = (event) => {
    setMessage(prevMessage => 'I am great');
  };
  
  return (
    <div className="App">
      <Title>onClickイベント</Title>
      <button onClick={handleClick}>クリック</button>
      <hr />
      <div>{message}</div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
