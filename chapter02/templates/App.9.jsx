import './App.css';

function App() {
  const students = [{
    id: 1,
    name: 'スパイダーマン',
    age: 17,
    hobby: 'アクロバット',
  },{
    id: 2,
    name: 'アイアンマン',
    age: 22,
    hobby: '社長',
  },{
    id: 3,
    name: 'ハルク',
    age: 23,
    hobby: '筋トレ',
  }];
  
  return (
    <div className="App">
      <div>
        <h1 className="title">Students</h1>
        <div>
        <table className="my-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>HOBBY</th>
            </tr>
          </thead>
          <tbody>
          {students.map(value => (
            <tr key={value.id}>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.hobby}</td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default App;