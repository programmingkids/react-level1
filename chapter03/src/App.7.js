import logo from './logo.svg';
import './App.css';

function App() {
  const fruits = ['apple', 'orange', 'melon', 'grape'];

  return (
    <div className="App">
      <Title>フルーツ</Title>
      <div>
        <Fruits data={fruits} />
      </div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const Fruits = (props) => (
  <div>
  {props.data.map(value => <li>{value}</li>)}
  </div>
);

export default App;
