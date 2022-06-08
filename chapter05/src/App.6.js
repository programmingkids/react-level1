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
  
  const [te,setTe] = useState('');
  const [comTe, setComTe] = useState('');
  const [result, setResult] = useState('');
  
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
    if( te === '') {
      return;
    }
    setTimeout(() => {
      const result = (comTe - te + resultData.length) % resultData.length;
      setResult(prevResult => result);
    }, 600);
  },[te]);
  
  return (
    <div>
      <JankenButton clickPon={clickPon} />
      <hr />
      <JankenResult data={{te,comTe,result, teData, resultData}} />
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

const Title = (props) => <h1>{props.children}</h1>;

export default App;
