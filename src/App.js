import React, { useState } from 'react';
import './App.css';


function App() {

  let [title,titleChange] = useState([`구로구 디저트 맛집`, `일산 데이트 맛집`, `독산동 세탁소`]);
  //좋아요 숫자 - 글을 추가하면 좋아요 Nan 으로 출력됨.. 기능 구현 추가 필요
  let [like, likeChange] = useState([0,0,0]);
  let [indexNum, indexNumChange] = useState(0);

  //입력값 변경
  const [list, setList] = useState('');

  //모달창 닫고 여는 스위치 state
  let [modal, modalChange] = useState(false);

  function handlertitle() {
    let newArray = [...title];
    newArray[0] = `청파동 디저트 맛집`;
    titleChange( newArray );
  }

  function handlertitleArray() {
    let newArrayOrder = [...title].sort();
    titleChange( newArrayOrder );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={handlertitle}>제목 추가하기</button>
      <button onClick={handlertitleArray}>제목 정렬하기</button>
      {
        title.map(function(title, i) {
          return (
            <div className="lists">
              <h3 onClick={()=>{indexNumChange(i)}}>{ title } <span onClick={()=>{
                let newlike = [...like];
                newlike[i]++;
                likeChange(newlike);
              }}> 🍁 </span> {like[i]} </h3>
              <p>11월 7일 발행</p>
              <hr/>
            </div>
          )
        })
      }
{/* 글 발행  */}
      <div className="publish">
          <input placeholder="글 입력" onChange={(e) => {
      setList(e.target.value);
  }}></input>
          <button type="submit" onClick={ ()=>{
            let arrayCopy = [...title];
            arrayCopy.unshift(list); //array 맨 앞에 자료 추가하는 문법
            titleChange( arrayCopy );
            } }>저장</button>
      </div>

      <button onClick={ () => {modalChange(!modal)} }>{!modal ? "열기" : "닫기"}</button>

      {
        modal === true
        ? <Modal title={title} indexNum={indexNum}></Modal> //자식 컴포넌트에 props를 받아오기 위해 부모컴포넌트에 "작명 = 전송한 state 이름"
        : null
      }

    </div>
  );
}

function Modal(props) {  //파라미터를 입력해서 props에 파라미터를 저장
  return (
    <div>
        <div className="modal">
          <h2>{props.title[props.indexNum]}</h2>
          <p>날짜</p>
          <p>상세 내용...</p>
        </div>
    </div>
  )
}

export default App;
