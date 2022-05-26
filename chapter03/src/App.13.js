import logo from './logo.svg';
import './App.css';

function App() {
  const scores = [{
    name : "Donald",
    ja : 85,
    ma : 92,
    en : 90,
  },{
    name : "Anna",
    ja : 95,
    ma : 85,
    en : 82,
  },{
    name : "Elsa",
    ja : 88,
    ma : 94,
    en : 93,
  },{
    name : "Ariel",
    ja : 90,
    ma : 82,
    en : 85,
  }];
  
  return (
    <div className="App">
      <Title>スコア一覧</Title>
      <ScoreTable data={scores} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const ScoreTable = (props) => (
  <table class="score-table">
    <ScoreHeader />
    <ScoreBody data={props.data} />
  </table>
);

const ScoreHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Japanese</th>
      <th>Math</th>
      <th>English</th>
      <th>Total</th>
    </tr>
  </thead>
);

const ScoreBody = (props) => (
  <tbody>
    {props.data.map((value) => <Score data={value} />)}
  </tbody>
);

const Score = (props) => {
  const {name, ja, ma, en} = props.data;
  const total = ja + ma + en;
  return (
    <tr>
      <td>{name}</td>
      <td>{ja}</td>
      <td>{ma}</td>
      <td>{en}</td>
      <td>{total}</td>
    </tr>
  );
};

export default App;
