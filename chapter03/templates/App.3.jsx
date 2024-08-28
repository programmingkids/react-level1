import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Content />
    </div>
  );
}

const Title = () => <h1>天気予報</h1>;

const Content = () => (
  <div>
    <h3>最高気温：18度</h3>
    <h3>最低気温：7度</h3>
  </div>
);

export default App;
