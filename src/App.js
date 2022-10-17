import "./App.css";
import Formpage from "./page/Formpage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import Listpage from "./page/Listpage";
import axios from "axios";

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
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Form" element={<Formpage />} />
        <Route path="/List" element={<Listpage />} />
      </Routes>
    </div>
  );
};

export default App;
