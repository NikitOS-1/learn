import { useAppSelector } from "./hooks/hooksTypes";

function App() {
  const counts = useAppSelector((state) => state.count.count);

  return (
    <div className="App">
      <button>increment</button>
      <button>decrement</button>
      <div>{counts}</div>
    </div>
  );
}

export default App;
