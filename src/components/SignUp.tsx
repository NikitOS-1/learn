import { useAppDispatch } from "../hooks/hooksTypes";
import { setUser } from "../redux/slice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let history = useNavigate();
  const dispatch = useAppDispatch();
  //@ts-ignore
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            tokken: "111",
          })
        );
        history("/");
      })
      .catch(console.error);
  };
  return <Form title="register" handleClick={handleRegister} />;
};
export default SignUp;
