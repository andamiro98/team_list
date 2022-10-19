import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import Header from "../components/Header";
import styled from "styled-components";
import HomeBox from "../home/HomeBox"
import Layout from "../components/Layout"

const Home = () => {
  const navigate = useNavigate();
  const goToADDTodo = () => {
    navigate("/Form");
  };
  const goToTodoList = () => {
    navigate("/List");
  };

  return (
    <Stlayout>
      <container>
        <div>
          <Header />
          <h1>무엇을 할까요 ?</h1>

          <container onClick={goToADDTodo}>
            <div>할일 기록하기</div>
            <BsArrowRightCircle size="32"></BsArrowRightCircle>
          </container>
          <container onClick={goToTodoList}>
            <div>할일 리스트</div>
            <BsArrowRightCircle size="32"></BsArrowRightCircle>
          </container>

          {/* <HomeBox title="할일 기록하기" onClick={goToADDTodo} />

        <HomeBox title="TODO LIST" onClick={goToTodoList} /> */}
        </div>
      </container>
    </Stlayout>
  );
};

export default Home;

const Stlayout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 800px;
  align-items: center;
  justify-content: center;
  background-color: lightskyblue;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
