import { useAppDispatch, useAppSelector } from "./hooks/hooksTypes";
import { increment, decrement } from "./redux/countReducer";
import { isUser, notUser } from "./redux/userReducer";

function App() {
  const counts = useAppSelector((state) => state.counter.value);
  const user = useAppSelector((state) => state.isUser.user);
  const dispatch = useAppDispatch();
  console.log(user);
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <div>{counts}</div>
      <button onClick={() => dispatch(isUser())}>if you user click</button>
      <button onClick={() => dispatch(notUser())}>if you user click</button>
    </div>
  );
}

export default App;
