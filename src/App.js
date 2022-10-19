import "./App.css";
import ADDTodo from "./pages/ADDTodo";
import { Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos";
import Home from "./pages/Home";
import { useState } from "react";
import Todo from "./pages/Todo";

const App = () => {
  // //URL감춰버리기
  // const URL = process.env.REACT_APP_URL;
  // //만능버튼 URL귀찮게 안쳐도됨 post는 동작 다른건테스트중
  // const HybridButton = (todo, todoId, edit) => {
  //   axios.post(`${URL}`, todo);
  //   axios.delete(`${URL}/${todoId}`);
  //   axios.patch(`${URL}/${todoId}`, edit);
  // };
  const [todo, setTodo] = useState({
    Writer: "",
    title: "",
    contents: "",
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Form"
          element={<ADDTodo todo={todo} setTodo={setTodo} />}
        />
        <Route path="/List" element={<Todos />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
