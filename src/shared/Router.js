import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo";
import Todos from "../pages/Todos";
import Home from "../pages/Home";
import AddTodoForm from "../todo/AddTodoForm"

const Router =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/todos" element={<Todos/>}/>
                <Route path="/addtodoform" element={<AddTodoForm/>}/>
                <Route path='/todo/:id' element={<Todo />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router