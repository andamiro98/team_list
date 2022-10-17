import React from "react";
import styled from "styled-components";


const Card = () =>{

 
    return(
        <div>
        <StCards>
            <StCardtop>
                <StCardtitle>제목</StCardtitle>
                <button>삭제</button>
            </StCardtop>
                <StCardbottom>작성자: </StCardbottom>    
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
