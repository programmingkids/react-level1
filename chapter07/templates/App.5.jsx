import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    message: '',
  });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.id]: event.target.value.replaceAll('\n', '<br>'),
    }));
  };

  return (
    <div className="App">
      <Title>テキストエリア</Title>
      <div>
        メッセージ：
        <textarea
          id="message"
          className="textarea"
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
      <div className="result">
        <div dangerouslySetInnerHTML={{ __html: data.message }}></div>
      </div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
