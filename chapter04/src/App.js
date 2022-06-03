import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [message, setMessage] = useState('How are you?');
  
  const handleClick = (event) => {
    setMessage(message => 'Great!');
  };
  
  return (
    <div className="App">
      <Title>メッセージ</Title>
      <div>
        <button onClick={handleClick}>変更</button>
      </div>
      <hr />
      <div>{message}</div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default React.memo(App);
