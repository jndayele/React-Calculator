import React, { useState } from "react";

const Calculator = () => {
  const [current, setCurrent] = useState(""); // To store the current number being input
  const [previous, setPrevious] = useState(null); // To store the previous number for calculation
  const [operator, setOperator] = useState(null); // To store the operator
  const [result, setResult] = useState(0); // To display the calculated result

  const handleNumberClick = (value) => {
    setCurrent((prev) => prev + value);
  };

  // Handler for operator buttons (+, -, *, /)
  const handleOperatorClick = (op) => {
    if (current === "") return; // Ignore if no number is entered

    if (previous === null) {
      setPrevious(current);
      setCurrent("");
    }
    setOperator(op);
  };

  // Calculate based on the operator
  const calculateResult = () => {
    if (!operator || current === "") return;

    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    let calculation = 0;

    switch (operator) {
      case "+":
        calculation = prev + curr;
        break;
      case "-":
        calculation = prev - curr;
        break;
      case "*":
        calculation = prev * curr;
        break;
      case "/":
        calculation = curr !== 0 ? prev / curr : "Error";
        break;
      default:
        return;
    }

    setResult(calculation);
    setPrevious(calculation);
    setCurrent("");
    setOperator(null);
  };

  // Clear the calculator
  const clear = () => {
    setCurrent("");
    setPrevious(null);
    setOperator(null);
    setResult(0);
  };

  return (
    <div className="wrapper">
      <div className="screen">
        <div>{current || result || "0"}</div>
      </div>
      <div className="buttonBox">
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperatorClick("+")} className="opt">
          +
        </button>
        <button onClick={() => handleOperatorClick("-")} className="opt">
          -
        </button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleOperatorClick("*")} className="opt">
          *
        </button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("/")} className="opt">
          /
        </button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("1")}>1</button>

        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={calculateResult} className="equals">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
