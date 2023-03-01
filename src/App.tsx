import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div className="App">
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
