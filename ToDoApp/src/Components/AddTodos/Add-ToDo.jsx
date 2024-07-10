import { useRef } from "react";

function AddTodo({ setTodos }) {
  const todoName = useRef();
  const todoDate = useRef();

  const addItem = () => {
    if (todoName.current.value === "" || todoDate.current.value === "") {
      return;
    }
    const userInput = {
      id: Math.random(),

      // Add a user value to list

      value: todoName.current.value,
      Date: todoDate.current.value,
      isComplete: false,
    };
    setTodos((prev) => [...prev, userInput]);
    todoName.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <div className="h-3/6 flex justify-center items-center flex-col gap-8 pt-40">
      <div className="flex justify-center items-center gap-6">
        <input
          className="w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          type="text"
          ref={todoName}
          placeholder="Enter a new Task"
        />
        <input
          className="w-60 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          type="date"
          ref={todoDate}
        />
        <button
          className="h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
          onClick={() => addItem()}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
