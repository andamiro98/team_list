import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate,useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Todo = () =>{

    const navigate = useNavigate();
    const todo = useSelector((state) => state.todos.todos);
    const { id } = useParams();
    const todoid = todo.filter((todo) => todo.id === Number(id))[0];

    return(
        <div>
            <Header/>
            <h1>상세페이지</h1>
            <St_box>
                <div>
                    <StBoxtop>
                        <Stid>id:{todoid.id}</Stid>
                        <Link to ={`/todos`}>
                            <Stlink>이전으로</Stlink>
                        </Link>
                    </StBoxtop>
                    <St_h1> 📝 {todoid.title} </St_h1>
                    <St_h4> 내용이 들어갑니다 </St_h4>
                </div>
                <St_butdiv>
                    <St_but onClick={()=>{
                        console.log("수정하기")
                    }}
                    >
                        수정하기
                    </St_but>
                </St_butdiv>
            </St_box>
            
                
            
        </div>
    );
        
};


export default Todo;



const St_box = styled.div`
    box-sizing: border-box;
    padding: 12px;
    height: 700px;
    border: 1px solid #ddd;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    width: 100%;
    max-width : 1000px;
    margin: 12px auto 12px auto;
    

`
const StBoxtop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin : 10px 10px 10px 24px;
    
`

const Stid = styled.div`
    font-size: 24px;
`

const Stlink = styled.div`
    text-decoration: underline;
    color: #256D85;
    font-size: 24px;
`

const St_h1 = styled.h1`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding: 0px 24px;
`

const St_h4 = styled.h4`
    padding: 0px 24px;
    display: block;
`
const St_butdiv = styled.div`
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
    min-height: 955px;
`
const St_but = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    border: 3px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    height: 46px;
    border-radius: 8px;
    width: 100%;
    max-width: 1500px;
    cursor: pointer;
`