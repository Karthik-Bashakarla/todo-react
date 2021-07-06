import React from "react";
import styled from "styled-components";

const AddButton = () => {
  return <Button type="submit">Add</Button>;
};

export default AddButton;

const Button = styled.button`
  background-color: #fea136;
  color: #fff;
  font-weight: medium;
  padding: 5px 15px;
  border-radius: 3px;
  border: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #fea136;
    box-sizing: border-box;
  }
`;
