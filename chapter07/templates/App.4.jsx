import './App.css';
import { useState } from 'react';

function App() {
  const items = [
    { id: 1, value: 'Japanese', label: '国語' },
    { id: 2, value: 'Math', label: '数学' },
    { id: 3, value: 'English', label: '英語' },
    { id: 4, value: 'Science', label: '理科' },
    { id: 5, value: 'Social-study', label: '社会' },
  ];

  const [data, setData] = useState({
    subject: [],
  });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.checked
        ? data.subject.concat([event.target.value])
        : data.subject.filter((v) => v !== event.target.value),
    }));
  };

  return (
    <div className="App">
      <Title>チェックボックス</Title>
      <div>
        好きな科目：
        <CheckboxInput items={items} action={handleChange} />
      </div>
      <hr />
      <div className="result">
        <div>好きな科目：{data.subject.map((value) => value + ', ')}</div>
      </div>
    </div>
  );
}

const CheckboxInput = ({ items, action }) => {
  return items.map((item) => {
    return (
      <label key={item.id} htmlFor={item.value}>
        <input
          type="checkbox"
          name="subject"
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
