import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title>行ってみたい国</Title>
      <div>
        <Nation>ニュージーランド</Nation>
        <Nation>メキシコ</Nation>
        <Nation>トルコ</Nation>
      </div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const Nation = (props) => (
  <li>{props.children}</li>
);

export default App;
