import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    todos: [],
    isLoading: false,
    error: null,
};

export const __getTodoThunk = createAsyncThunk(
    "GET_TODO",
    async (payload, thunkAPI) => {
        try{
            const data = await axios.get("http://localhost:3001/todos");
            console.log(data)
            return thunkAPI.fulfillWithValue(data.data);
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }}
    );

export const __deleteTodoThunk = createAsyncThunk(
    "DELETE_TODO",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.delete("http://localhost:3001/todos");
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }}
    );
    



export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        clearTodo: (state, action) => {
            state.isSuccess = false;
        },
    },
    extraReducers : {
        [__getTodoThunk.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
        },
        [__getTodoThunk.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
            state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣음
        },
        [__getTodoThunk.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
        },
        [__deleteTodoThunk.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
        },
        [__deleteTodoThunk.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
            state.todos = state.todos(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣음
        },
        [__deleteTodoThunk.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
        },
    },
    });




export const {clearTodo} = todosSlice.actions;
export default todosSlice.reducer;