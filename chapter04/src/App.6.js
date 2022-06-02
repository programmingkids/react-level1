import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const kuji = ['大吉','中吉','小吉','吉','凶'];
  const resultData = kuji.map(name => ({name, count:0, ratio:0}));
  
  let [omikuji, setOmikuji] = useState('');
  let [total, setTotal] = useState(0);
  const [resultList, setResultList] = useState(resultData);
  
  const handleClick = (event) => {
    const min = 0;
    const max = kuji.length - 1;
    const randomNum = getRandomNumber(min, max);
    
    omikuji = kuji[randomNum];
    setOmikuji(omikuji);
    
    total++;
    setTotal(total);
    
    setResultList(resultList.map(row => {
      if(row.name === omikuji) {
        row.count++;
      }
      row.ratio = Math.round(row.count / total * 100);
      return row;
    }));
  };
  
  return (
    <div className="App">
      <Title>おみくじ</Title>
      <div>
        <button onClick={handleClick}>くじを見る</button>
      </div>
      <OmikujiBox omikuji={omikuji} total={total} />
      <hr />
      <h2>結果一覧</h2>
      <ResultBox data={resultList} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const OmikujiBox = (props) => (
  <div>
    <div>今日の運勢：{props.omikuji}</div>
    <div>合計回数：{props.total} 回</div>
  </div>
);

const ResultBox = (props) => (
  <table className="my-table">
    <ResultHeader />
    <ResultBody data={props.data} />
  </table>
);

const ResultHeader = () => (
  <thead>
    <tr>
      <th>結果</th>
      <th>回数</th>
      <th>確率</th>
    </tr>
  </thead>
);

const ResultBody = (props) => (
  <tbody>
  {props.data.map(value => <ResultItem key={value.name} data={value} />)}
  </tbody>
);

const ResultItem = (props) => {
  const {name, count, ratio} = props.data;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
      <td>{ratio}%</td>
    </tr>
  );
};

export default React.memo(App);
