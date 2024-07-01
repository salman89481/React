import React, { useState } from "react";
import TextArea from "./TextArea/TextArea";
import Buttons from "./Buttons/Buttons";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="calculator">
      <TextArea input={input} showResult={showResult} />
      <Buttons
        input={input}
        setInput={setInput}
        setShowResult={setShowResult}
      />
    </div>
  );
}

export default App;
