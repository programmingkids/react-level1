import logo from './logo.svg';
import './App.css';

function App() {
  const items = [{
    name : 'じゃがいも',
    price: 120,
    quantity : 3,
  },{
    name : 'トマト',
    price: 150,
    quantity : 2,
  },{
    name : '玉ねぎ',
    price: 190,
    quantity : 4,
  },{
    name : 'ニンジン',
    price: 90,
    quantity : 4,
  }];
  
  return (
    <div className="App">
      <Title>商品一覧</Title>
      <Items data={items} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const Items = (props) => (
  <table className="my-table">
    <ItemHeader />
    <ItemBody data={props.data} />
  </table>
);

const ItemHeader = () => (
  <thead>
    <tr>
      <th>商品名</th>
      <th>金額</th>
      <th>個数</th>
      <th>小計</th>
    </tr>
  </thead>
);

const ItemBody = (props) => (
  <tbody>
  {props.data.map(value => <Item data={value} />)}
  </tbody>
);

const Item = (props) => {
  const {name, price, quantity} = props.data;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{price * quantity}</td>
    </tr>
  );
};

export default App;
