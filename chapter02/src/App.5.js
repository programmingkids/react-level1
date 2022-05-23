import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: 'やまだ',
    age: 16,
    hobby: '音楽',
  };
  return (
    <div className="App">
      <div>
        <h1>自己紹介</h1>
        <h2>名前：{person.name}</h2>
        <h2>年齢：{person.age}</h2>
        <h2>趣味：{person.hobby}</h2>
      </div>
    </div>
  );
}

export default App;
