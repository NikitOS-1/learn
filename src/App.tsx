import { useAppDispatch, useAppSelector } from "./hooks/hooksTypes";
import { increment, decrement } from "./redux/countReducer";

function App() {
  const counts = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <div>{counts}</div>
    </div>
  );
}

export default App;
