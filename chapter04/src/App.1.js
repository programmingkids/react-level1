import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('山田');
  
  const handleClick = function(event) {
    setName('佐藤');
  };
  
  return (
    <div className="App">
      <Title>名前変更</Title>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>{name}</div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
