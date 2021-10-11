import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  /* 공통 스타일 */
  outline: none;
  border: none;
  width: 300px;
  border-radius: 30px;
  font-weight: bold;
  line-height: 300px;
  text-align: center;
  margin-left: 30px;
  text-decora

  /*크기*/
  height: 300px;
  font-size: 30pt;

  /*색상*/
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /*기타*/
  & + & {
    margin-left: 1rem;
  }
`;

// eslint-disable-next-line react/prop-types
function Button({ children, ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyleButton {...rest}>{children}</StyleButton>;
}

export default Button;
