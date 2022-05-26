import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name : 'ベル',
    age : 15,
    hobby : 'ダンス',
  };

  return (
    <div className="App">
      <Title>自己紹介</Title>
      <div>
        <Person data={person} />
      </div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const Person = (props) => (
  <div>
    <div>名前：{props.data.name}</div>
    <div>年齢：{props.data.age}</div>
    <div>趣味：{props.data.hobby}</div>
  </div>
);

export default App;
