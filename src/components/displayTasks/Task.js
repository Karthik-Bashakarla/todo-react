import React from "react";
import styled from "styled-components";

const Task = ({ task, completeTask, deleteTask }) => {
  return (
    <TaskContainer>
      <TaskDisplay>{task}</TaskDisplay>
      <Button1 type="submit" value={task} onClick={completeTask}>
        Done
      </Button1>
      <Button2 type="submit" value={task} onClick={deleteTask}>
        Delete
      </Button2>
    </TaskContainer>
  );
};

export default Task;

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 5px 10px;
  width: 480px;
  margin: 15px 0;
  border: 2px solid red;
`;

const TaskDisplay = styled.div`
  flex: 1;
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: medium;
  border-radius: 3px;
  outline: none;
  border: transparent;
`;

const Button1 = styled.button`
  margin-left: 10px;
  padding: 5px 15px;
  background-color: green;
  color: #fff;
  font-weight: medium;
  border-radius: 3px;
  border: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: green;
    box-sizing: border-box;
  }
`;

const Button2 = styled.button`
  margin-left: 10px;
  padding: 5px 15px;
  background-color: red;
  color: #fff;
  font-weight: medium;
  border-radius: 3px;
  border: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: red;
    box-sizing: border-box;
  }
`;
