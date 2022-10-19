import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    // const DEL_TODO = "DEL_TODO";


    // export const delTodo = (payload) => {
    //     return {type: DEL_TODO, payload};
    // };


    // const initialState = {
    //     todos : [
    //         {"id": 1, "title": "React 공부하기", "user": "익명12"},
    //         {id: 2, title: "JS 공부하기", user: "익명25"},
    //         {id: 3, title: "CSS 공부하기", user: "익명07"},
    //     ],

    // };

    //GET thunk
    export const __getTodoThunk = createAsyncThunk(
        "GET_TODO", //action value
        async (payload, thunkAPI) => { //콜백
            try{
                const data = await axios.get("http://localhost:3001/todos");
                return thunkAPI.fulfillWithValue(data.data);
            }catch (error) {
                return thunkAPI.rejectWithValue(error);
            }}
        );
        
    //DELETE thunk
    export const __deleteTodoThunk = createAsyncThunk(
        "DELETE_TODO",
        async (payload, thunkAPI) => {
            try {
                await axios.delete(`http://localhost:3001/todos/${payload}`);
                return thunkAPI.fulfillWithValue(payload);
            } catch (error) {
                return thunkAPI.rejectWithValue(error);
            }}
        );

    const initialState = {
        todos: [],
        isLoading: false,
        isSuccess: false,
        error: null,
    };

    export const todosSlice = createSlice({
        name: "todos", //모듈의 이름
        initialState,
        reducers: {}, //action value + action creator
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
                state.todos = state.todos.filter((todo) => todo.id !== action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 filter
            },
            [__deleteTodoThunk.rejected]: (state, action) => {
                state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
                state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
            },
            },
            });



    // const todos = (state = initialState, action) => {
    //     switch (action.type) {
    //         case DEL_TODO:
    //             return{
    //                 ...state,
    //                 todos:[...state.todos.filter((todo) => todo.id !== action.payload.id)]
    //             };
    //             default:
    //                 return state;
    //     };
    // };
    // export default todos;

export const {} = todosSlice.actions;
export default todosSlice.reducer;