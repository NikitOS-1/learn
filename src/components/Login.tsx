import { useAppDispatch } from "../hooks/hooksTypes";
import { setUser } from "../redux/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

const Login = () => {
  const dispatch = useAppDispatch();
  //@ts-ignore
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <div>
      <Form title="Sign In" handleClick={handleLogin} />
    </div>
  );
};
export default Login;
