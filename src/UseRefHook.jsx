import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const [fn, setFn] = useState("");
  const inputDom = useRef("");
  const focus = () => {
    inputDom.current.focus();
  };

  return (
    <div>
      <input
        ref={inputDom}
        type="text"
        value={fn}
        onChange={(e) => {
          setFn(e.target.value);
        }}
      />
      <h3>typing: {fn}</h3>
      <button onClick={focus}>Submit</button>
    </div>
  );
};

export default UseRefHook;
