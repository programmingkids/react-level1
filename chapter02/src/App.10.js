import logo from './logo.svg';
import './App.css';

function App() {
  const foods = ['カレー', 'ラーメン', 'ハンバーグ', 'ピザ'];
  
  return (
    <div className="App">
      <div>
        <h1>食べ物</h1>
        <h2>好きな料理</h2>
        <div>
        {foods.map(value => <li>{value}</li>)}
        </div>
      </div>
    </div>
  );
}

export default App;
