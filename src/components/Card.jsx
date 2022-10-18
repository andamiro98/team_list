import React from "react";

import { useDispatch } from "react-redux";
import styled from "styled-components";

const Card = ({todo}) =>{
    const dispatch = useDispatch();

    const onDeleteHandler = () => {

    }

    return(
        <div>
        <StCards>
            <StCardtop>
                <StCardtitle>{todo.title}</StCardtitle>

                <button
                onClick={() => {
                    if(window.confirm("진짜 지울꺼에요?")) {
                        return onDeleteHandler();
                    } else {
                        return;
                    }
                }}
                
                >삭제</button>

            </StCardtop>
                <StCardbottom>{todo.user}</StCardbottom>    
        </StCards>

        </div>
    );
};


export default Card;

const StCards = styled.div`
    box-sizing: border-box;
    padding: 12px;
    height: 90px;
    border: 1px solid #ddd;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    width: 100%;
    margin: 12px auto 12px auto;
`

const StCardtop = styled.div`
    display: flex;
    justify-content: space-between;
`
const StCardtitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`


const StCardbottom = styled.div`
    margin: 20px 0px;
    font-size: 12px;
`

