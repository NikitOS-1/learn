import { useAppDispatch, useAppSelector } from "./hooks/hooksTypes";
import { increment, decrement } from "./redux/countReducer";

function App() {
  const counts = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  let id = 1;
  let name = "nik";
  console.log(id);
  console.log(name);
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <div>{counts}</div>
    </div>
  );
}

export default App;
