import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleFocus = (event) => {
    const id = event.target.id;
    const text = `${id}にフォーカスしました<br />`;
    const newMessage = message.concat(text);
    setMessage((prevMessage) => newMessage);
  };

  const handleBlur = (event) => {
    const id = event.target.id;
    const text = `${id}からフォーカスが外れました<br />`;
    const newMessage = message.concat(text);
    setMessage((prevMessage) => newMessage);
  };

  return (
    <div className="App">
      <Title>onFocus/onBlurイベント</Title>
      <div>
        名前：
        <input
          type="text"
          id="name"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div>
        年齢：
        <input type="text" id="age" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <hr />
      <div id="message-box" dangerouslySetInnerHTML={{ __html: message }}></div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
