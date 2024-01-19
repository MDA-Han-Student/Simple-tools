import { useState } from "react";

import CalculatorDisplay from "./CalculatorBase";
import CalculatorPad from "./CalculatorBase";

export default function CalculatorBase({ setNotice }) {
  const [baseNum, setBaseNum] = useState(0);
  const [calcNum, setCalcNum] = useState(baseNum);
  const [arith, setArith] = useState(undefined);
  const [succeeded, setSucceeded] = useState(undefined);

  const mathCheck = (num) => {
    if (arith === "div" && num === 0) {
      setNotice("Cannot divide by 0");
      return false;
    }
    if (arith === "sqrt" && num < 0) {
      setNotice("Cannot calculate the square root of a negative number");
      return false;
    }
    return true;
  };

  const mathSwitch = (num) => {
    if (mathCheck(num)) {
      switch (arith) {
        case "plus":
          calcNum = calcNum + num;
          break;
        case "min":
          calcNum = calcNum - num;
          break;
        case "div":
          calcNum = calcNum / num;
          break;
        case "mult":
          calcNum = calcNum * num;
          break;
        case "exp":
          calcNum = Math.pow(calcNum, num);
          break;
        case "sqrt":
          calcNum = Math.sqrt(num);
          break;
        case "calc":
          baseNum = calcNum;
          break;
      }
    }
  };

  return (
    <div>
      <CalculatorDisplay num={baseNum}/>
      <CalculatorPad setArith={setArith} mathSwitch={mathSwitch} />
    </div>
  );
}
