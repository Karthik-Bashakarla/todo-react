import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Task";
import { DELETE_TASK } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Tasks = ({ tasks }) => {
  const [task, setTask] = useState(tasks);
  const dispatch = useDispatch();

  const completeTask = (event) => {
    console.log("done");
  };
  const deleteTask = (event) => {
    dispatch({ type: DELETE_TASK, payload: event.target.value });
    console.log(event.target.value);
  };
  return (
    <TasksContainer>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </TasksContainer>
  );
};

export default Tasks;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
