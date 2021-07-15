import "./App.css";
import AddTaskSection from "./Input/AddTaskSection";
import styled from "styled-components";

import Tasks from "./displayTasks/Tasks";
import { useSelector } from "react-redux";

function App() {
  const text = useSelector((state) => state.addTaskReducer.tasks);

  return (
    <>
      <Header>ToDo List</Header>
      <AddTaskSection />
      <Tasks tasks={text} />
    </>
  );
}

export default App;

const Header = styled.h1`
  text-align: center;
  margin: 5vh 0;
`;
