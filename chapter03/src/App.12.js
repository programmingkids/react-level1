import logo from './logo.svg';
import './App.css';

function App() {
  const enemies = [
    '悪魔の騎士', 
    'サンダードラゴン', 
    'キングスライム', 
    'ファイヤーゴーレム'
  ];
  
  return (
    <div className="App">
      <Title>敵紹介</Title>
      <Enemies data={enemies} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const Enemies = (props) => (
  <div className="my-list-box">
  {props.data.map(enemy => <Enemy data={enemy} />)}
  </div>
);

const Enemy = (props) => (
  <li className="my-list">{props.data}</li>
);

export default App;
