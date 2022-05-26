import logo from './logo.svg';
import './App.css';

function App() {
  const hero = {
    name : 'マイケル',
    job : '勇者',
    hp : 20,
    mp : 15,
    level: 5,
    special : 'イナズマ斬り',
  };

  return (
    <div className="App">
      <Title>プレイヤー紹介</Title>
      <Character data={hero} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const Character = (props) => {
  // propsを個別の変数に分割代入
  const {name, job, level, special} = props.data;
  
  return (
    <div>
      <div>名前：{name}</div>
      <div>職業：{job}</div>
      <div>レベル：{level}</div>
      <div>特殊攻撃：{special}</div>
    </div>
  );
};

export default App;
