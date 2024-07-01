import React, { useState } from "react";
import Results from "../Results/Result";

import "./TextArea.css";

function TextArea({ input, showResult }) {
  return (
    <div className="display">
      <input type="text" value={input} readOnly />
      {showResult && (
        <div className="result">
          <Results input={input} />
        </div>
      )}
    </div>
  );
}

export default TextArea;
