import React from "react";
import { useState, useEffect } from "react";

// re-render-state change
// mounting (initial render)
// changing(re-render)
// unmount

// run side effect(intial loading, when the components changes)
// cb function, optional dependency array list []
const SimpleEffect = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(20);
  useEffect(() => {
    console.log("useeffect ran");
  }, [num,count]);
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl my-3">Use Effect Basics</h1>
      <h1 className="text-3xl">{count}</h1>
      <button className="mybtn" onClick={() => setCount(count + 1)}>
        Change
      </button>
      <h1 className="text-3xl">{num}</h1>
      <button className="mybtn" onClick={() => setNum(num + 1)}>
        Change
      </button>
    </div>
  );
};

export default SimpleEffect;
