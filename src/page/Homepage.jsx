import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Homepage = () => {
  const navigate = useNavigate();
  const goToFormpage = () => {
    navigate("/Form");
  };
  const goToListpage = () => {
    navigate("/List");
  };
  return (
    <div>
      <Header />
      <button onClick={goToFormpage}>폼입력페이지</button>

      <button onClick={goToListpage}>리스트 페이지</button>
    </div>
  );
};

export default Homepage;
