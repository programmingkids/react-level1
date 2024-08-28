import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    const text = event.target.value;
    setMessage((prevMessage) => text);
  };

  return (
    <div className="App">
      <Title>onChangeイベント</Title>
      <input type="text" onChange={handleChange} />
      <hr />
      <div>{message}</div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
