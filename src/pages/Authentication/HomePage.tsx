import { useAppDispatch, useAppSelector } from "hooks/hooksTypes";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { removeUser } from "redux/userSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>HomePage</div>
      <button onClick={() => dispatch(removeUser())}>
        Log Out from {"email"}
      </button>
    </div>
  );
};
export default HomePage;
