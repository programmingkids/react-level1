import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    music: '',
  });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <Title>セレクトボックス</Title>
      <div>
        好きな音楽：
        <select id="music" className="selectbox" onChange={handleChange}>
          <option value="">選択</option>
          <option value="rock">ロック</option>
          <option value="pops">ポップス</option>
          <option value="anime">アニソン</option>
          <option value="vocaloid">ボーカロイド</option>
        </select>
      </div>
      <hr />
      <div className="result">
        <div>好きな音楽：{data.music}</div>
      </div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
