import React, { useState } from "react";
import styled from "styled-components";
import AddButton from "./AddButton";
import { useDispatch, useSelector } from "react-redux";
import ADD_TASK from "../../redux/actions";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const text = useSelector((state) => state.addTaskReducer);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addTask2 = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TASK, payload: e.target[0].value });
    // console.log(text);
    e.target[0].value = "";
  };

  return (
    <>
      <Form onSubmit={addTask2}>
        <InputContainer>
          <input
            type="text"
            placeholder="Add Task"
            onChange={onChange}
            value={input}
          />
        </InputContainer>
        <AddButton />
      </Form>
      <h1>{text}</h1>
    </>
  );
};

export default Input;

const Form = styled.form`
  display: flex;
`;

const InputContainer = styled.div`
  margin: 0 10px;
  // border: 2px solid red;
  input {
    padding: 5px 10px;
    width: 300px;
    border-radius: 3px;
    outline: none;
    border: transparent;
  }
`;
