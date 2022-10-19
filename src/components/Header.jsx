import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const navbar = () => {
  return (
    <StContainer>
      <Link to="/">홈</Link>
      <StTitle>모두의 마블모두해</StTitle>
    </StContainer>
  );
};

export default navbar;

const StContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
`;

const StTitle = styled.div`
  font-size: 24px;
`;

