// src/redux/modules/todosSlice.js

// 투두리스트  DB.JSON에서 get해서 로딩완료되면리스트페이지에 뿌려주기
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
      //fulfillWithValue란?`**fulfillWithValue` 는 툴킷에서 제공하는 API 입니다.**

      // Promise에서 `**resolve**`된 경우, 다시 말해 **네트워크 요청이 성공한 경우에 dispatch 해주는
      //기능을 가진 API** 입니다. 그리고 인자로는 **payload**를 넣어줄 수 있습니다.
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      //rejectWithValue실패할경우
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
