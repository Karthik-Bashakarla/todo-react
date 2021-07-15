import React from "react";

import Input from "./Input";
import styled from "styled-components";

const AddTaskSection = () => {
  return (
    <InputContainer>
      <Input />
    </InputContainer>
  );
};

export default AddTaskSection;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;
