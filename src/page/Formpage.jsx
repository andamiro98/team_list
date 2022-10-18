import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export const Formepage = ({ HybridButton }) => {
  /////이동시켜주는함수
  const navigate = useNavigate();
  const goToListpage = () => {
    navigate("/List");
  };
  const goToHomepage = () => {
    navigate("/");
  };
  // 새롭게 생성하는 todo를 관리하는 state ,     post 구문
  const [todo, setTodo] = useState({
    Writer: "",
    title: "",
    contents: "",
  });
  // const isValidLogin = !(todos.Writer && todos.title);

  //추가버튼눌럿을때 보내는것                     post구문 여기서보내면 db.json으로 가는것 리듀서에서
  //처리하는거아님*****
  //추가버튼눌럿을때 보내는것                     post구문
  const onSubmitHandler = (todo) => {
    axios.post("http://localhost:3001/todos", todo);
  };

  return (
    <>
      <Header />
      <form
        className="FORM-GROUP"
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다. //포스트구문 전부

          onSubmitHandler(todo);
          goToListpage(e);
        }}
      >
        <h1>작성자</h1>
        <input
          className="inpot"
          type="text"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              Writer: value,
            });
          }}
        />
        <h1>제목</h1>
        <input
          className="inpot"
          type="text"
          required
          title="제목을 10글자이상입력하세요"
          pattern=".{10,1000}"
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <h1>내용</h1>
        <textarea
          className="inpoot"
          cols="250"
          rows="10"
          type="text"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              contents: value,
            });
          }}
        />
        <div>
          <button onClick={goToHomepage} className="buttons">
            이전으로
          </button>
          <button
            disabled={todo.contents === "" ? true : false}
            className="buttons"
          >
            추가하기
          </button>
        </div>
      </form>
    </>
  );
};

export default Formepage;
