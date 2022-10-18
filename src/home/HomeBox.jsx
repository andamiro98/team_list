import React from "react";
import styled from "styled-components";

import { BsArrowRightCircle } from "react-icons/bs";

const HomeBox = ({ title, onClick }) => {
  return (
    <container onClick="{onClick}">
      <div>{title}</div>
      <BsArrowRightCircle size="32"></BsArrowRightCircle>
    </container>
  );
};

export default HomeBox;
