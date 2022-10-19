import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getCommnetsByTodoId } from "../redux/modules/commentsSlice";
const Comments = () => {
  //아디값받아주고
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.comments.commentsByTodoId);

  useEffect(() => {
    dispatch(__getCommnetsByTodoId(id));
  }, [dispatch, id]);
  console.log(data);
  // axios를 통해서 get 요청을 하는 함수를 생성합니다.                     //Get 구문
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.

  return (
    <div>
      <div>
        {data?.map((comment) => (
          <div key={comment.id} comment={comment}>
            <div>
              {comment.content}
              {comment.username}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
