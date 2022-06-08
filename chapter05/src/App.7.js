import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  return (
    <div className="App">
      <Title>じゃんけん</Title>
      <JankenBox />
    </div>
  );
}

const JankenBox = () => {
  const teData = ['ぐー','ちょき','ぱー'];
  const resultData = ['あいこ','勝ち', '負け'];
  const initResultData = resultData.map(name => ({name, count:0, ratio:0}));
  
  const [te,setTe] = useState('');
  const [comTe, setComTe] = useState('');
  const [result, setResult] = useState('');
  const [total, setTotal] = useState(0);
  const [resultList, setResultList] = useState(initResultData);
  
  const clearTe = () => {
    setTe(prevTe => '');
    setComTe(prevTe => '');
    setResult(prevResult => '');
  };
  
  const clickPon = (te) => {
    clearTe();
    setTimeout(() =>{
      setTe(prevTe => te);
      const comTe = getRandomNumber(0, teData.length-1);
      setComTe(prevComTe => comTe);
    },200);
  };
  
  useEffect(() => {
    if( te === '' ) {
      return;
    }
    setTimeout(() => {
      const result = (comTe - te + resultData.length) % resultData.length;
      setResult(prevResult => result);
      setTotal(total => total + 1);
    }, 600);
  },[te]);
  
  useEffect(() => {
    if( te === '') {
      return;
    }
    const newResultList = resultList.map(row => {
      if(row.name === resultData[result]) {
        row.count++;
      }
      row.ratio = Math.round(row.count / total * 100);
      return row;
    });
    setResultList(rs => newResultList);
  }, [result]);
  
  return (
    <div>
      <JankenButton clickPon={clickPon} />
      <hr />
      <h2>結果</h2>
      <JankenResult data={{te,comTe,result, teData, resultData}} />
      <hr />
      <h2>結果一覧</h2>
      <JankenResultList resultList={resultList} />
    </div>
  );
};

const JankenButton = (props) => {
  const {clickPon} = props;
  return (
    <div>
      <button onClick={() => clickPon(0)}>ぐー</button>
      <button onClick={() => clickPon(1)}>ちょき</button>
      <button onClick={() => clickPon(2)}>ぱー</button>
    </div>
  );
};

const JankenResult = (props) => {
  const {te, comTe, result, teData, resultData} = props.data;
  return (
    <div className="score-list">
      <div className="score-row">
        <div>プレイヤー</div><div>{te !== '' && teData[te]}</div>
      </div>
      <div className="score-row">
        <div>コンピュータ</div><div>{comTe !== '' && teData[comTe]}</div>
      </div>
      <div className="score-row">
        <div>結果</div><div>{result !== '' && resultData[result]}</div>
      </div>
    </div>
  );
};

const JankenResultList = (props) => (
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

const Title = (props) => <h1>{props.children}</h1>;

export default App;
