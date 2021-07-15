import React, { useState } from "react";
import styled from "styled-components";
import AddButton from "./AddButton";
import { useDispatch, useSelector } from "react-redux";
import ADD_TASK from "../../redux/actions";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const text = useSelector((state) => state.addTaskReducer.tasks);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addTask2 = (e) => {
    e.preventDefault();
    setInput(e.target[0].value);
    dispatch({ type: ADD_TASK, payload: input });
    setInput("");
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
