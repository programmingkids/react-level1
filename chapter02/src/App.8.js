import logo from './logo.svg';
import './App.css';

function App() {
  // データ
  const music = ['Rock', 'Rap', 'EDM', 'Anime'];
  
  return (
    <div className="App">
      <div>
        <h1 className="title">Music</h1>
        {music.map(value => <div className="bluebox">{value}</div>)}
      </div>
    </div>
  );
}

export default App;
