import './App.css';

function App() {
  return (
    <div className="App">
      <Head title="生徒紹介" />
      <Person name="山田" />
      <Person name="鈴木" />
      <Person name="田中" />
    </div>
  );
}

const Head = (props) => <h1>{props.title}</h1>;

const Person = (props) => <h3>{props.name}さん</h3>;

export default App;
