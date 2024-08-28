import './App.css';
import { useState } from 'react';

function App() {
  const years = [
    { id: 0, value: '', label: '選択' },
    { id: 1, value: '1st', label: '1年' },
    { id: 2, value: '2nd', label: '2年' },
    { id: 3, value: '3rd', label: '3年' },
  ];

  const bukatsu = [
    { id: 1, value: 'Tennis', label: 'テニス' },
    { id: 2, value: 'Soccer', label: 'サッカー' },
    { id: 3, value: 'Brassband', label: '吹奏楽' },
    { id: 4, value: 'Science', label: '科学' },
  ];

  const [data, setData] = useState({
    school: '',
    year: '',
    bukatsu: '',
  });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.id]: event.target.value,
    }));
  };

  const handleChangeRadio = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <Title>練習問題</Title>
      <div>
        学校：
        <input
          type="text"
          id="school"
          className="textbox"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div>
        学年：
        <SelectBox items={years} action={handleChange} />
      </div>
      <div>
        部活：
        <RadioInput items={bukatsu} action={handleChangeRadio} />
      </div>
      <hr />
      <div className="result">
        <div>名前：{data.school}</div>
        <div>学年：{data.year}</div>
        <div>部活：{data.bukatsu}</div>
      </div>
    </div>
  );
}

const SelectBox = ({ items, action }) => (
  <select id="year" className="selectbox" onChange={action}>
    {items.map((item) => (
      <option key={item.id} value={item.value}>
        {item.label}
      </option>
    ))}
  </select>
);

const RadioInput = ({ items, action }) => {
  return items.map((item) => {
    return (
      <label key={item.id} htmlFor={item.value}>
        <input
          type="radio"
          name="bukatsu"
          id={item.value}
          value={item.value}
          onChange={action}
        />
        {item.label}
      </label>
    );
  });
};

const Title = (props) => <h1>{props.children}</h1>;

export default App;
