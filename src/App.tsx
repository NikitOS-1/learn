import { useAppDispatch, useAppSelector } from "./hooks/hooksTypes";
import { increment, decrement } from "./redux/countReducer";
import { isUser, notUser } from "./redux/userReducer";

function App() {
  const counts = useAppSelector((state) => state.counter.value);
  const user = useAppSelector((state) => state.isUser.user);
  const dispatch = useAppDispatch();
  let id = 1;
  let name = "nik";
  console.log(id);
  console.log(name);
  console.log(user);
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <div>{counts}</div>
      <button onClick={() => dispatch(isUser({ id, name }))}>
        if you are user
      </button>
    </div>
  );
}

export default App;
