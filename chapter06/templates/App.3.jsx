import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('white-area');

  const handleMouseOver = (event) => {
    const id = event.target.id;
    switch (id) {
      case 'red':
        setColor((prevColor) => 'red-area');
        break;
      case 'blue':
        setColor((prevColor) => 'blue-area');
        break;
      case 'green':
        setColor((prevColor) => 'green-area');
        break;
    }
  };

  const handleMouseOut = (event) => {
    setColor((prevColor) => 'white-area');
  };

  return (
    <div className="App">
      <Title>onMouseOver/onMouseOutイベント</Title>
      <div id="area-container">
        <div
          className="area red-area"
          id="red"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          赤色
        </div>
        <div
          className="area blue-area"
          id="blue"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          青色
        </div>
        <div
          className="area green-area"
          id="green"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          緑色
        </div>
      </div>
      <hr />
      <div id="result" className={color}></div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
