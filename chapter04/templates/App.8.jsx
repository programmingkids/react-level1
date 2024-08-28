import './App.css';
import { useState } from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const kujiData = ['大吉', '中吉', '小吉', '吉', '凶'];
  const resultData = kujiData.map((name) => ({ name, count: 0, ratio: 0 }));

  const [omikuji, setOmikuji] = useState({
    result: '',
    total: 0,
    resultList: resultData,
  });

  const handleClick = (event) => {
    let { result, total, resultList } = omikuji;

    const min = 0;
    const max = kujiData.length - 1;
    const randomNumber = getRandomNumber(min, max);

    result = kujiData[randomNumber];
    total++;
    resultList = resultList.map((row) => {
      if (row.name === result) {
        row.count++;
      }
      row.ratio = Math.round((row.count / total) * 100);
      return row;
    });

    setOmikuji((omikuji) => ({ result, total, resultList }));
  };

  return (
    <div className="App">
      <Title>おみくじ</Title>
      <div>
        <button onClick={handleClick}>くじを見る</button>
      </div>
      <OmikujiBox result={omikuji.result} total={omikuji.total} />
      <hr />
      <h2>結果一覧</h2>
      <ResultBox resultList={omikuji.resultList} />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const OmikujiBox = (props) => (
  <div>
    <div>今日の運勢：{props.result}</div>
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
    {props.resultList.map((value) => (
      <ResultItem key={value.name} data={value} />
    ))}
  </tbody>
);

const ResultItem = (props) => {
  const { name, count, ratio } = props.data;

  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
      <td>{ratio}%</td>
    </tr>
  );
};

export default App;
