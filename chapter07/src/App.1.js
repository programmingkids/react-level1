import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState({
    name : '',
    age : '',
  });
  
  const handleChange = (event) => {
    const newData = {...data};
    newData[event.target.id] = event.target.value;
    setData(prevData => newData);
  };
  
  return (
    <div className="App">
      <Title>テキストボックスとonChange</Title>
      <div>
        <div>
        名前：<input 
          type="text" 
          className="textbox" 
          id="name" 
          autoComplete="off"
          onChange={handleChange} />
        </div>
        <div>
        年齢：<input 
          type="number" 
          className="textbox" 
          id="age" 
          autoComplete="off"
          onChange={handleChange} />
        </div>
      </div>
      <hr />
      <div className="result">
        <div>
          名前：{data.name}
        </div>
        <div>
          年齢：{data.age}
        </div>
      </div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
