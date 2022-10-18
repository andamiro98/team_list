import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Todo from "../pages/Todo";
import Homepage from "../page/Homepage";
import Listpage from "../page/Listpage";
import Formpage from "../page/Formpage";
import Home from "../pages/Home";

const Router =() => {
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={}/> */}
                <Route path="/" element={<Home />} />
                <Route path="/Form" element={<Formpage />} />
                <Route path="/List" element={<Listpage />} />
                <Route path='/works/:id' element={<Todo />} />
            
            </Routes>
        </BrowserRouter>
    );
};

export default Router;