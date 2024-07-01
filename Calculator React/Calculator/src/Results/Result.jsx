import { useState } from "react";

function Results({ input }) {
  // const [result, setResult] = useState("");

  let result;
  try {
    result = eval(input).toString();
  } catch (error) {
    result = "Error";
  }

  return <div>{result}</div>;
}
export default Results;
