import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Azalt
      </button>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
};

export default Counter;
