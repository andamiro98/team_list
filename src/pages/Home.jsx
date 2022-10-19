import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeBox from "../home/HomeBox"
import Layout from "../components/Layout"

const Home = () => {

    const navigate = useNavigate();
    
    return (
        <div>
            <Layout/>
            <div>
                <div>
                    <h1>무엇을 할까요 ?</h1>

                    <HomeBox 
                    title="할일 기록하기"
                    onClick={() => {
                        navigate("/addtodoform")
                        //navigate("ADDTodo component")
                    }}/>

                    <HomeBox
                    title="TODO LIST"
                    onClick={() => {
                        navigate("/todos")
                    }}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;