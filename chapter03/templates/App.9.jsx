import './App.css';

function App() {
  const person = {
    name: 'ベル',
    age: 15,
    hobby: 'ダンス',
    comments: [
      '将来はミュージカルに出演したいです',
      'ボイストレーニングを頑張りたいです',
      '今はジャズダンスに取り組んでいます',
    ],
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
    <hr />
    <Comments data={props.data.comments} />
  </div>
);

const Comments = (props) => (
  <div>
    <h2>コメント</h2>
    {props.data.map((value) => (
      <li key={value}>{value}</li>
    ))}
  </div>
);

export default App;
