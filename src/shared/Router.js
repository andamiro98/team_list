import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo";


const Router =() => {
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={}/> */}
                <Route path='/works/:id' element={<Todo />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router