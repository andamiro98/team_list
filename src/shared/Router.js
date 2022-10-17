import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail";
import Layout from "../components/Layout";
import Home from "../pages/Home";



const Router =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={Home}/>
                <Route path='/detail/:id' element={} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;