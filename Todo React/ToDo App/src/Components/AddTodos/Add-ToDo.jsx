import { useState } from "react";

function AddTodo({ setTodos }) {
  const [text, settext] = useState("");

  const addItem = () => {
    if (text.trim() === "") {
      return; // Exit the function if the input is blank or contains only whitespace
    }
    const userInput = {
      // Add a random id which is used to delete
      id: Math.random(),

      // Add a user value to list

      value: text,
      isComplete: false,
    };
    setTodos((prev) => [...prev, userInput]);
    settext("");
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8">
      <div className="flex justify-center items-center gap-6">
        <input
          className="w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          placeholder="Enter a new Task"
          value={text}
          onChange={(e) => settext(e.target.value)}
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
