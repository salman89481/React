// function ShowTodo({ todos }) {
//   return (
//     <ol>
//       {todos.map((todo) => (
//         <li key={todo.key}>{todo.value}</li>
//       ))}
//     </ol>
//   );
// }

import React from "react";
function ShowTodo({ todos, setTodos }) {
  const deleteTodo = (id) => {
    const flteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(flteredTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        return todo;
      } else {
        return todo;
      }
    });
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  if (todos.length === 0) return null;

  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className="text-blue-600 uppercase font-semibold text-2xl">
        Task List
      </h1>
      <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
        {todos.map((todo) => (
          <div className="flex justify-between items-center mb-5" key={todo.id}>
            <li className="list-none w-2/3 text-left break-normal ${todo.isComplete ? 'line-through' : ''}">
              {todo.value}
            </li>

            <div className="flex gap-3">
              <button
                className="bg-blue-600 text-white px-2 py-2 font-medium rounded-md"
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.isComplete ? "Undo" : "Complete"}
              </button>
              <button
                className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ShowTodo;
