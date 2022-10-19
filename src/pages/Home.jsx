import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
const Home = () => {
  const navigate = useNavigate();
  const goToADDTodo = () => {
    navigate("/Form");
  };
  const goToTodoList = () => {
    navigate("/List");
  };

  return (
    <container>
      <div>
        <h1>무엇을 할까요 ?</h1>

        <container onClick={goToADDTodo}>
          <div>할일 기록하기</div>
          <BsArrowRightCircle size="32"></BsArrowRightCircle>
        </container>
        <container onClick={goToTodoList}>
          <div>할일 기록하기</div>
          <BsArrowRightCircle size="32"></BsArrowRightCircle>
        </container>

        {/* <HomeBox title="할일 기록하기" onClick={goToADDTodo} />

        <HomeBox title="TODO LIST" onClick={goToTodoList} /> */}
      </div>
    </container>
  );
};

export default Home;
