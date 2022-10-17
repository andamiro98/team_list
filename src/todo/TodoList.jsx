import React from "react";
import Card from "../components/Card";
import { useState } from "react";
import { useSelector } from "react-redux";

const TodoList = () =>{
    const todos = useSelector((state) => state);
    console.log(todos)

    return(
        <div>
            <div> TodoList : card를 map하는 component</div>
            {/* {todos.map((todo) =>{
                <Card key ={todo.id} todo ={todo}/>}
                )} */}
                <Card/>
            
            
        </div>
    )
}

export default TodoList