import logo from './logo.svg';
import './App.css';

function App() {
  const students = [{
    name: 'Spiderman',
    age: 17,
    hobby: 'acrobat',
  },{
    name: 'Ironman',
    age: 22,
    hobby: 'CEO',
  },{
    name: 'Hulk',
    age: 23,
    hobby: 'gym',
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
            <tr>
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
