import logo from './logo.svg';
import './App.css';

function App() {
  const fruits = ['apple','orange','melon','grape'];
  return (
    <div className="App">
      <div>
        <h1>Fruits</h1>
        <div>
          {fruits.map(value => <li>{value}</li>)}
        </div>
      </div>
    </div>
  );
}

export default App;
