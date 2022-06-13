import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [data, setData] = useState({
    message : '',
  });
  
  const handleChange = (event) => {
    const message = event.target.value.replaceAll('\n', '<br>');
    const newData = {...data, message};
    setData(prevData => newData);
  };
  
  return (
    <div className="App">
      <Title>テキストエリア</Title>
        <div>
          メッセージ：
          <textarea className="textarea" onChange={handleChange} ></textarea>
        </div>
      <hr />
      <div className="result">
        <div dangerouslySetInnerHTML={{__html: data.message}}>
        </div>
      </div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
