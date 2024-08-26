import './App.css';

function App() {
  // データ
  const nations = ['Japan', 'USA', 'France', 'Italy', 'Spain'];
  
  // divタグのスタイル
  const divStyle={
    display: 'inline-block',
    width: '200px',
  };
  
  // liタグのスタイル
  const liStyle={
    color: '#2d8fdd',
    borderLeft: 'solid 0.4em #2d8fdd',
    background: '#f1f8ff',
    marginBottom: '0.5em',
    lineHeight: '1.8em',
    padding: '0.7em',
    listStyleType: 'none',
  };
  
  return (
    <div className="App">
      <div>
        <h1>Nations</h1>
        <div style={divStyle}>
          {nations.map(value => <li key={value} style={liStyle}>{value}</li>)}
        </div>
      </div>
    </div>
  );
}

export default App;