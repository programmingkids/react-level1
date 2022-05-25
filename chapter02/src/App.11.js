import logo from './logo.svg';
import './App.css';

function App() {
  const temp = [{
    date : '1月10日',
    high : '15度',
    low  : '2度',
  },{
    date : '1月11日',
    high : '14度',
    low  : '0度',
  },{
    date : '1月12日',
    high : '9度',
    low  : '-2度',
  }];

  return (
    <div className="App">
      <div>
        <h1>天気予報</h1>
        <h2>3日間の気温</h2>
        <table className="my-table">
          <thead>
            <th>日付</th>
            <th>最高気温</th>
            <th>最低気温</th>
          </thead>
          <tbody>
          {temp.map(value => (
            <tr>
              <td>{value.date}</td>
              <td>{value.high}</td>
              <td>{value.low}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
