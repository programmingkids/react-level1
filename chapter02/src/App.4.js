import logo from './logo.svg';
import './App.css';

function App() {
  const highTemp = 25;
  const lowTemp = 8;
  return (
    <div className="App">
      <div>
        <h1>天気予報</h1>
        <h2>最高気温：{highTemp}度</h2>
        <h2>最低気温：{lowTemp}度</h2>
      </div>
    </div>
  );
}

export default App;
