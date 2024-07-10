import { useState } from "react";
import Heading from "./Components/AppName/Heading";
import AddTodo from "./Components/AddTodos/Add-ToDo";
import ShowTodo from "./Components/ShowTodos/ShowTodo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Heading />
      <AddTodo setTodos={setTodos} />
      <ShowTodo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
