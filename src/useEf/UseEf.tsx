import { useEffect, useState } from "react";

const UseEf = () => {
  const [count, setCount] = useState<number>(0);
  console.log(count);
  const increment = () => {
    setCount((state) => state + 1);
  };
  const decrement = () => {
    setCount((state) => state - 1);
  };
  useEffect(() => {
    count > 2 ? setCount((state) => (state = 0)) : console.log(false);
  }, [count]);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default UseEf;
