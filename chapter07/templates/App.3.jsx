import './App.css';
import { useState } from 'react';

function App() {
  const items = [
    { id: 1, value: 'pizza', label: 'ピザ' },
    { id: 2, value: 'sushi', label: '寿司' },
    { id: 3, value: 'curry', label: 'カレー' },
    { id: 4, value: 'ramen', label: 'ラーメン' },
  ];

  const [data, setData] = useState({
    food: '',
  });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <Title>ラジオボタン</Title>
      <div>
        好きな食べ物：
        <RadioInput items={items} action={handleChange} />
      </div>
      <hr />
      <div className="result">
        <div>好きな食べ物：{data.food}</div>
      </div>
    </div>
  );
}

const RadioInput = ({ items, action }) => {
  return items.map((item) => {
    return (
      <label key={item.id} htmlFor={item.value}>
        <input
          type="radio"
          name="food"
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
