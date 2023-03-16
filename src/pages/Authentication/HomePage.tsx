import { useAppDispatch } from "hooks/hooksTypes";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { removeUser } from "redux/slice/userSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <div>HomePage</div>
      <button onClick={() => dispatch(removeUser())}>
        Log Out from{email}
      </button>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};
export default HomePage;
