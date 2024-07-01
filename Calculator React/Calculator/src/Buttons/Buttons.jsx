import "./Buttons.css";

function Buttons({ input, setInput, setShowResult }) {
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    //setResult('');
  };
  return (
    <>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button
          onClick={() => {
            setShowResult(false);
            handleClear();
          }}
        >
          C
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button
          onClick={() => {
            setShowResult(true);
          }}
        >
          =
        </button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>

      {/* {showResult && <Results input={input} />} */}
    </>
  );
}

export default Buttons;
