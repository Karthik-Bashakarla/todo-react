import "./App.css";
import AddTaskSection from "./Input/AddTaskSection";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header>ToDo List</Header>
      <AddTaskSection />
    </div>
  );
}

export default App;

const Header = styled.h1`
  text-align: center;
  margin: 5vh 0;
`;
