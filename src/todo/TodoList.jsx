import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const TodoList = () => {
  const [todos, setTodos] = useState(null); ///              GET구문

  const URL = process.env.REACT_APP_URL; //env처리해서 안보여주게하기
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos"); //env처리 git에 안올라감
    setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };
  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  return (
    <div>
      <div> TodoList : card를 map하는 component</div>
      <div>
        {todos?.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
