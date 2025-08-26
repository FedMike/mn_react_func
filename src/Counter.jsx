import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("from clicker", count);

    return () => console.log("counter unmount");
  }, [count]);

  return (
    <>
      <button onClick={() => decrement()}>-</button>
      <span style={{ display: "inline-block", margin: "0 0.5rem" }}>
        {count}
      </span>
      <button onClick={() => increment()}>+</button>
    </>
  );
}

export default Counter;
