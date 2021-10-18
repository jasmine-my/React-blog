import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,titleChange] = useState([`구로구 디저트 맛집`, `일산 데이트 맛집`, `독산동 세탁소`]);
  let [like, likeChange] = useState(0);

  function handlertitle() {
    let newArray = [...title];
    newArray[0] = `강남구 디저트 맛집`;
    titleChange( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="lists">
        <h3>{ title[0] }<span onClick={ () => { likeChange(like+1) } }> 🥞</span> { like } </h3>
        <p>2월 17일 발행</p>
        <button onClick={ handlertitle }>제목 변경</button>
        <hr/>
      </div>
      <div className="lists">
        <h3>{ title[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="lists">
        <h3>{ title[2] }</h3>
        <p>10월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
