import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import HomeBox from "../home/HomeBox"
import { Layout } from "../components"




const Home = () => {

    const navigate = useNavigate();


    return (
        <Layout>

            <container>
                <div>
                    
                    <h1>무엇을 할까요 ?</h1>
                    
                    <HomeBox 
                    title="할일 기록하기"
                    onClick={() => {
                        navigate("/Todos")
                    }}/>

                    <HomeBox
                    title="TODO LIST"
                    onClick={() => {
                        navigate("/Todo")
                    }}/>

                </div>
            </container>

        </Layout>
    )
}

export default Home;