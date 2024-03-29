import { Link } from "react-router-dom";
import SignUp from "../../components/SignUp";

const RegistrationPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        If you have account <Link to={"/login"}>Sign Up</Link>
      </p>
    </div>
  );
};
export default RegistrationPage;
