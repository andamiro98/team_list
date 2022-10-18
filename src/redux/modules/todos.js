const DEL_TODO = "DEL_TODO";


export const delTodo = (payload) => {
    return {type: DEL_TODO, payload};
};


const initialState = {
    todos : [
        {id: 1, title: "React 공부하기", user: "익명12"},
        {id: 2, title: "JS 공부하기", user: "익명25"},
        {id: 3, title: "CSS 공부하기", user: "익명07"},
    ],
};



const todos = (state = initialState, action) => {
    switch (action.type) {
        case DEL_TODO:
            return{
                ...state,
                todos:[...state.todos.filter((todo) => todo.id !== action.payload.id)]
            };
            default:
                return state;
    };
};

export default todos;