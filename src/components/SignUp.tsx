import { useAppDispatch } from "../hooks/hooksTypes";
import { setUser } from "../redux/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let push = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
  return <Form title="register" handleClick={handleRegister} />;
};
export default SignUp;
