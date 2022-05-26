import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Head title="テストの結果" />
      <div>
        <Score subject="国語" score="95" />
        <Score subject="数学" score="86" />
        <Score subject="英語" score="90" />
      </div>
    </div>
  );
}

const Head = (props) => <h1>{props.title}</h1>;

const Score = (props) => (
  <li>{props.subject}は{props.score}点</li>
);

export default App;
