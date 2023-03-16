import { useAppDispatch } from "../hooks/hooksTypes";
import { setUser } from "../redux/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let push = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            tokken: user.refreshToken,
          })
        );
        push("/");
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form title="Sign In" handleClick={handleLogin} />
    </div>
  );
};
export default Login;
