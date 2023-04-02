import React from "react";
import { useEffect, useState } from "react";

function UseEffectAdv() {
  const [cnt, setCnt] = useState(0);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <div>
      <h2>useeffect</h2>
      <h2>{pageWidth}</h2>
    </div>
  );
}

export default UseEffectAdv;
