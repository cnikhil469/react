import React, { useRef, useState } from "react";
import "./calculator.scss";

function Calculator() {
  const [Count, setCount] = useState(0);
  const inputRefA = useRef(0);
  const inputRefB = useRef(0);
  let val = null;

  function Addition() {
    val = parseInt(inputRefA.current.value) + parseInt(inputRefB.current.value);
    setCount(val);
    return;
  }

  function Subtraction() {
    val = parseInt(inputRefA.current.value) - parseInt(inputRefB.current.value);
    setCount(val);
    return;
  }

  function Multiplication() {
    val = parseInt(inputRefA.current.value) * parseInt(inputRefB.current.value);
    setCount(val);
    return;
  }

  function Division() {
    val = parseInt(inputRefA.current.value) / parseInt(inputRefB.current.value);
    setCount(val);
    return;
  }

  return (
    <section className="container">
      <div className="inp-section">
        <input
          type="text"
          name=""
          id=""
          ref={inputRefA}
          className=""
          placeholder="A = "
        />
        <input
          type="text"
          name=""
          id=""
          ref={inputRefB}
          className=""
          placeholder="B = "
        />
      </div>
      <div className="button-section">
        <button onClick={Addition} className="addition">
          A + B
        </button>
        <button onClick={Subtraction} className="">
          A - B
        </button>
        <button onClick={Multiplication} className="">
          A * B
        </button>
        <button onClick={Division} className="">
          A / B
        </button>
      </div>
      <span className="result-span">{Count}</span>
    </section>
  );
}

export default Calculator;
