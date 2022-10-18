import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export const Listpage = () => {
  const [todos, setTodos] = useState(null); ///              GET구문
  //

  // axios를 통해서 get 요청을 하는 함수를 생성합니다.                     //Get 구문
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const URL = process.env.REACT_APP_URL; //env처리해서 안보여주게하기
  const fetchTodos = async () => {
    const { data } = await axios.get(`${URL}`); //env처리 git에 안올라감
    setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };
  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            <h1>제목:{todo.title}</h1>
            <h5>작성자:{todo.Writer}</h5>
            <h3>내용:{todo.contents}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listpage;