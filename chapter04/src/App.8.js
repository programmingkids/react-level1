import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const kujiData = ['大吉','中吉','小吉','吉','凶'];
  const resultData = kujiData.map(name => ({name, count:0, ratio:0}));
  
  const [omikuji, setOmikuji] = useState({
    kuji : '',
    total : 0,
    resultList : resultData,
  });
  
  const handleClick = (event) => {
    const min = 0;
    const max = kujiData.length - 1;
    const randomNum = getRandomNumber(min, max);
    
    const kuji = kujiData[randomNum];
    
    setOmikuji(omikuji => {
      let { total, resultList} = omikuji;
      total++;
      resultList = resultList.map(row => {
        if(row.name === kuji) {
          row.count++;
        }
        row.ratio = Math.round(row.count / total * 100);
        return row;
      });
      return {kuji, total, resultList};
    });
  };
  
  return (
    <div className="App">
      <Title>おみくじ</Title>
      <div>
        <button onClick={handleClick}>くじを見る</button>
      </div>
      <OmikujiBox kuji={omikuji.kuji} total={omikuji.total} />
      <hr />
      <h2>結果一覧</h2>
      <ResultBox resultList={omikuji.resultList} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const OmikujiBox = (props) => (
  <div>
    <div>今日の運勢：{props.kuji}</div>
    <div>合計回数：{props.total} 回</div>
  </div>
);

const ResultBox = (props) => (
  <table className="my-table">
    <ResultHeader />
    <ResultBody resultList={props.resultList} />
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
  {props.resultList.map(value => <ResultItem key={value.name} data={value} />)}
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
