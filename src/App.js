
import React from "react";

import Router from "./shared/Router"


const App = () => {
  // //URL감춰버리기
  // const URL = process.env.REACT_APP_URL;
  // //만능버튼 URL귀찮게 안쳐도됨 post는 동작 다른건테스트중
  // const HybridButton = (todo, todoId, edit) => {
  //   axios.post(`${URL}`, todo);
  //   axios.delete(`${URL}/${todoId}`);
  //   axios.patch(`${URL}/${todoId}`, edit);
  // };

  return (
    <>
      <Router />
    </>
  );
};

export default App;
