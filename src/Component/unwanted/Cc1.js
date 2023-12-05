import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <h2>Count: {count}
      </h2>
      <h3>
      <button onClick={increaseCount}>Increment</button>
      </h3>
    </div>
  );
};

export default Counter;