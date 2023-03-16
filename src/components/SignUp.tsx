import { useAppDispatch } from "../hooks/hooksTypes";
import { setUser } from "../redux/slice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useAppDispatch();
  //@ts-ignore
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
};
export default SignUp;
