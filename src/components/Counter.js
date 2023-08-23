import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 2)}>+3</button>
    </div>
  );
};

export default Counter;
